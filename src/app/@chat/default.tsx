export default function ChatDefault() {
  return (
    <div className="space-y-4 text-black">
      <h2 className="text-lg font-bold text-black">
        💬 Chat cho các route khác
      </h2>
      <div className="bg-white rounded-lg p-3 shadow-sm">
        <p className="text-sm text-gray-600 mb-3">
          Chào mừng! Bạn có thể bắt đầu cuộc trò chuyện ở đây.
        </p>
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded text-sm">
            <span className="font-medium">Bot:</span> Xin chào! Tôi có thể giúp
            gì cho bạn?
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
          Gửi
        </button>
      </div>
    </div>
  );
}
