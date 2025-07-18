import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="mt-5 p-8 max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-black">
        📰 Bài viết không tồn tại
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <div className="mt-6">
        <Link href="/posts" className="text-blue-600 hover:underline">
          ← Quay lại danh sách bài viết
        </Link>
      </div>
    </div>
  );
}
