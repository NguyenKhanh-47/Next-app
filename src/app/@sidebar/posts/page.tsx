export default function PostSidebar() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-black">📚 Danh mục của post</h2>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="/posts" className="hover:underline text-blue-600">
            📝 Bài viết của post
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline text-blue-600">
            ℹ️ Giới thiệu của post
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline text-blue-600">
            📬 Liên hệ của post
          </a>
        </li>
      </ul>
    </div>
  );
}
