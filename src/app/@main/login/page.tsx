"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLoginUser } from "@/hooks/useUsers";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { loginUser, loading } = useLoginUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const result = await loginUser(form.email, form.password);
      console.log("🚀 ~ handleLogin ~ result:", result);
      if (result) {
        // Nếu backend set httpOnly cookie, chỉ cần redirect, không cần lưu token ở FE
        router.push("/members");
      } else {
        setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      }
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra khi đăng nhập.");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow text-black">
      <h1 className="text-2xl font-bold mb-6">Đăng nhập</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
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
          <label className="block mb-1 font-medium">Mật khẩu</label>
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
}
