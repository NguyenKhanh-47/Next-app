"use client";
import { useState } from "react";
import { useCreateUser } from "@/hooks/useUsers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Lấy access token từ cookie
  const accessToken = request.cookies.get("accessToken")?.value;

  // Kiểm tra nếu truy cập /main/members hoặc /main/members/create mà không có token thì redirect
  if (request.nextUrl.pathname.startsWith("/main/members") && !accessToken) {
    // Redirect sang /main/posts
    const url = request.nextUrl.clone();
    url.pathname = "/main/posts";
    return NextResponse.redirect(url);
  }

  // Cho phép truy cập các route khác
  return NextResponse.next();
}

// Chỉ áp dụng middleware cho các route cần bảo vệ
export const config = {
  matcher: ["/main/members/:path*"],
};

export default function CreateMemberPage() {
  const { createUser, loading, error } = useCreateUser();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setMessage("Tạo user thành công!");
      setForm({ name: "", email: "", password: "" });
    } catch {
      setMessage("Có lỗi xảy ra khi tạo user.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-black">
      <h1 className="text-2xl font-bold mb-6 text-black">Tạo thành viên mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-black">Tên</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-black">Mật khẩu</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Đang tạo..." : "Tạo thành viên"}
        </button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
        {error && <p className="mt-2 text-red-500">{error.message}</p>}
      </form>
    </div>
  );
}
