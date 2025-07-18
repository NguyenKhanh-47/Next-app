import Link from "next/link";

export default function SidebarPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-red-500">
        📚 Danh mục của home page
      </h2>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="hover:underline text-blue-600">
            🏠 Trang chủ
          </Link>
        </li>
        <li>
          <Link href="/posts" className="hover:underline text-blue-600">
            📝 Bài viết
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-blue-600">
            ℹ️ Giới thiệu
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline text-blue-600">
            📬 Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
}
