'use client';

import { useSchedule } from '@/context/ScheduleContext';

export default function HistoryPage() {
  const { scheduleHistory, clearHistory, setCurrentStep } = useSchedule();

  console.log('HistoryPage - scheduleHistory:', scheduleHistory, 'length:', scheduleHistory.length);

  const startNewSchedule = () => {
    setCurrentStep(1);
  };

  // Get the latest schedule (first item in array since we add new ones at the beginning)
  const latestSchedule = scheduleHistory.length > 0 ? scheduleHistory[0] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💕 Dating Planner
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Tạo lịch trình hẹn hò lãng mạn cho chúng ta! ✨
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <button
              onClick={startNewSchedule}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              💕 Tạo Lịch Trình Mới
            </button>
          </div>
        </div>

        {latestSchedule ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  📅 Lịch Trình Hẹn Hò Gần Nhất
                </h2>
                <p className="text-gray-600 mt-1">💕 {latestSchedule.date}</p>
              </div>
              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                🗑️ Xóa lịch sử
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  11:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🍜 Ăn trưa</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.lunch?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.lunch?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  13:30
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">☕ Cafe & Makeup</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.cafe?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.cafe?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  15:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">📸 Photobooth</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.photobooth?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.photobooth?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  17:30
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🍽️ Dinner tại Pezzi</h3>
                  <p className="text-gray-800 font-medium">Pezzi - Western & Wine</p>
                  <p className="text-sm text-gray-600">Edison</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  20:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🏍️ Lượn lờ xe máy</h3>
                  <p className="text-gray-800 font-medium">Tận hưởng không khí đêm thành phố</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  22:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🏠 Đưa em về nhà</h3>
                  <p className="text-gray-800 font-medium">Kết thúc ngày hẹn hò đáng nhớ</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">💕</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Chưa có lịch sử hẹn hò nào
            </h3>
            <p className="text-gray-600 mb-6">
              Hãy tạo lịch trình đầu tiên cho chúng ta nhé!
            </p>
            <button
              onClick={startNewSchedule}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-medium transition-colors"
            >
              Bắt đầu ngay 💕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
