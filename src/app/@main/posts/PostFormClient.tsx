"use client";

import { useState } from "react";
import { createPost } from "./actions";

export default function PostFormClient() {
  const [message, setMessage] = useState("");

  return (
    <form
      action={async (formData) => {
        const res = await createPost(formData);
        if (res.success) {
          setMessage("✅ Gửi bài viết thành công!");
        } else {
          setMessage("❌ Có lỗi xảy ra.");
        }
      }}
      className="max-w-xl mx-auto bg-gray-50 p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-black">🆕 Tạo bài viết mới</h2>

      <input
        name="title"
        placeholder="Tiêu đề"
        required
        className="w-full border px-3 py-2 rounded text-black"
      />

      <textarea
        name="body"
        placeholder="Nội dung"
        required
        className="w-full border px-3 py-2 rounded text-black"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Gửi bài viết
      </button>

      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}
