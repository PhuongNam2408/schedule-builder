'use client';

import { useSchedule } from '@/context/ScheduleContext';

export default function HistoryPage() {
  const { scheduleHistory, clearHistory, setCurrentStep } = useSchedule();

  const startNewSchedule = () => {
    setCurrentStep(1);
  };

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

        {scheduleHistory.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                📅 Lịch Sử Hẹn Hò ({scheduleHistory.length})
              </h2>
              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                🗑️ Xóa tất cả
              </button>
            </div>
            
            <div className="space-y-6">
              {scheduleHistory.map((history) => (
                <div key={history.id} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-pink-700 mb-1">
                        💕 {history.date}
                      </h3>
                      <p className="text-gray-600">Timeline: 11:00 - 22:00</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🍽️</span>
                        <span className="font-semibold text-gray-700">Quán Trưa</span>
                      </div>
                      <h4 className="font-bold text-gray-900">{history.lunch.name}</h4>
                      <p className="text-sm text-gray-600">{history.lunch.address}</p>
                      <p className="text-sm text-pink-600">11:00 - 13:00</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">☕</span>
                        <span className="font-semibold text-gray-700">Quán Cafe</span>
                      </div>
                      <h4 className="font-bold text-gray-900">{history.cafe.name}</h4>
                      <p className="text-sm text-gray-600">{history.cafe.address}</p>
                      <p className="text-sm text-amber-600">13:30 - 16:00</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">📸</span>
                        <span className="font-semibold text-gray-700">Photobooth</span>
                      </div>
                      <h4 className="font-bold text-gray-900">{history.photobooth.name}</h4>
                      <p className="text-sm text-gray-600">{history.photobooth.address}</p>
                      <p className="text-sm text-purple-600">16:30 - 18:00</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">🍽️</span>
                        <span className="font-semibold text-gray-700">Quán Tối</span>
                      </div>
                      <h4 className="font-bold text-gray-900">Pezzi</h4>
                      <p className="text-sm text-gray-600">Edison</p>
                      <p className="text-sm text-rose-600">19:00 - 21:30</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {scheduleHistory.length === 0 && (
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
