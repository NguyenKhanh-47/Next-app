// app/posts/CheckLoginClient.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckLoginClient() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");
    if (!token) {
      router.replace("/");
    }
  }, []);

  return null;
}
