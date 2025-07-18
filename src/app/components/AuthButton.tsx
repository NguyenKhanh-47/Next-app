"use client";

import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();

  // Khi nhấn đăng nhập, gọi /api/login, sau đó set localStorage và chuyển hướng
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/login", { method: "POST" });
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("isLoggedIn", data.success);
          router.push("/posts");
        } else {
          alert("Đăng nhập thất bại!");
        }
      }}
      className="text-blue-600"
    >
      Đăng nhập bằng Google (Fake)
    </button>
  );
}
