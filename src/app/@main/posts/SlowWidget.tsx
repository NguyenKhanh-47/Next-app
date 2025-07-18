// app/posts/SlowWidget.tsx
export default async function SlowWidget() {
  // giả lập delay 3s
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    // Điều này giúp không cache → luôn fetch mới
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="p-4 bg-slate-100 rounded text-center">
      <p className="text-black">
        🐶 Ảnh sử dụng Streaming & Suspense để render sau
      </p>
      <img
        src={data.message}
        alt="Dog"
        className="mx-auto max-w-xs h-auto mt-2 rounded"
      />
    </div>
  );
}
