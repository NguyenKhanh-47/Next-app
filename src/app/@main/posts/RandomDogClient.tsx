// app/posts/RandomDogClient.tsx
"use client";

import { useEffect, useState } from "react";

export default function RandomDogClient() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImgUrl(data.message);
    setLoading(false);
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        🐶 Ảnh chó random (client-side)
      </h2>
      {loading ? (
        <p>Đang tải ảnh...</p>
      ) : (
        <img
          src={imgUrl!}
          alt="A random dog"
          className="mx-auto max-w-xs rounded shadow-md"
        />
      )}
      <button
        onClick={fetchDog}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔄 Tải ảnh khác
      </button>
    </div>
  );
}
