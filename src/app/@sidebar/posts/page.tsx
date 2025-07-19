import Link from "next/link";

export default function PostSidebar() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-black">📚 Danh mục của post</h2>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/posts" className="hover:underline text-blue-600">
            📝 Bài viết của post
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline text-blue-600">
            ℹ️ Giới thiệu của post
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline text-blue-600">
            📬 Liên hệ của post
          </Link>
        </li>
      </ul>
    </div>
  );
}
