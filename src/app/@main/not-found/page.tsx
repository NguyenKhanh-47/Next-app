import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="space-y-6">
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">⚠️</span>
          </div>
        </div>

        <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Trang không tồn tại
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng
          kiểm tra lại URL hoặc quay về trang chủ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            🏠 Về trang chủ
          </Link>
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            📝 Xem bài viết
          </Link>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Cần hỗ trợ?
          </h3>
          <p className="text-xs text-gray-600">
            Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ với chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
}
