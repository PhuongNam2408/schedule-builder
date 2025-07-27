'use client';

import { useEffect } from 'react';
import { useSchedule } from '@/context/ScheduleContext';

export default function HistoryPage() {
  const { scheduleHistory, clearHistory, setCurrentStep, loadDefaultSchedule } = useSchedule();

  console.log('HistoryPage - scheduleHistory:', scheduleHistory, 'length:', scheduleHistory.length);

  const startNewSchedule = () => {
    setCurrentStep(1);
  };

  // Auto-load default schedule nếu chưa có lịch sử nào
  useEffect(() => {
    if (scheduleHistory.length === 0) {
      console.log('No schedule history found, loading default schedule...');
      loadDefaultSchedule();
    }
  }, [scheduleHistory.length, loadDefaultSchedule]);

  // Get the latest schedule (first item in array since we add new ones at the beginning)
  const latestSchedule = scheduleHistory.length > 0 ? scheduleHistory[0] : null;
  
  // Check if the latest schedule is a default one
  const isDefaultSchedule = latestSchedule?.id.startsWith('default-');

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            💕 Dating Planner
          </h1>
          <p className="text-lg text-white font-medium drop-shadow-md">
            Tạo lịch trình hẹn hò lãng mạn cho chúng ta! ✨
          </p>
        </div>

        <div className="bg-white/95 rounded-2xl shadow-lg p-8 mb-8 backdrop-blur-sm">
          <div className="text-center">
            <div className="mb-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p className="text-base">
                Anh chào Thu Phương, người yêu của anh. Đây có thể nói là lần đầu tiên anh chuẩn bị gần như hoàn toàn cho buổi đi date của mình. Để giúp bé có trải nghiệm tốt hơn, anh tạo ra trang web này giúp em đưa ra những lựa chọn mà embe có thể yêu thích. Còn nếu không, em cứ bấm vào <strong>&ldquo;Xóa toàn bộ lịch sử&rdquo;</strong>, và sử dụng lựa chọn default của anh đưa ra nhá. Nếu em muốn tham khảo thêm các lựa chọn khác, em hãy bấm <strong>&ldquo;Tạo lịch trình mới&rdquo;</strong> nha. Anh yêu Thu Phương ❤️
              </p>
            </div>
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
                  📅 {isDefaultSchedule ? 'Lịch Trình Mặc Định' : 'Lịch Trình Hẹn Hò Mới Nhất'}
                </h2>
                <p className="text-gray-600 mt-1">💕 {latestSchedule.date}</p>
                {isDefaultSchedule && (
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    ✨ Đây là lựa chọn mặc định của anh
                  </div>
                )}
              </div>
              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                🗑️ Xóa toàn bộ lịch sử
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
                  11:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🍜 Ăn trưa</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.lunch?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.lunch?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
                  13:30
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">☕ Cafe & Makeup</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.cafe?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.cafe?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
                  15:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">📸 Photobooth</h3>
                  <p className="text-gray-800 font-medium">{latestSchedule.photobooth?.name || 'Chưa có thông tin'}</p>
                  <p className="text-sm text-gray-600">{latestSchedule.photobooth?.address || 'Chưa có địa chỉ'}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
                  17:30
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🍽️ Dinner tại Pezzi</h3>
                  <p className="text-gray-800 font-medium">Pezzi - Western & Wine</p>
                  <p className="text-sm text-gray-600">Edison</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
                  20:00
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">🏍️ Lượn lờ xe máy</h3>
                  <p className="text-gray-800 font-medium">Tận hưởng không khí đêm thành phố</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{minWidth: '4rem', minHeight: '4rem'}}>
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
