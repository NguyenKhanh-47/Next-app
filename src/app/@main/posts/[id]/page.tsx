// app/posts/[id]/page.tsx
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic"; // SSR mỗi lần truy cập

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  console.log("🚀 ~ PostDetailPage ~ id:", id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const post: Post = await res.json();

  return (
    <div className="mt-5 p-8 max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-200">
      <h1 className="text-3xl font-bold mb-4 text-black">📰 {post.title}</h1>
      <p className="text-red-500">
        Đây là trang đầy đủ (F5 vào route sẽ thấy trang này).
      </p>
      <p className="text-gray-700 text-lg">{post.body}</p>

      <div className="mt-6">
        <a href="/posts" className="text-blue-600 hover:underline">
          ← Quay lại danh sách bài viết
        </a>
      </div>
    </div>
  );
}
