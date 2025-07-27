'use client';

import { useSchedule } from '@/context/ScheduleContext';
import { ArrowLeft } from 'lucide-react';

export default function Summary() {
  const { 
    selectedLunch, 
    selectedCafe, 
    selectedPhotobooth, 
    setCurrentStep,
    saveCurrentSchedule,
    resetSelections
  } = useSchedule();

  const handleSaveAndNew = () => {
    saveCurrentSchedule();
    resetSelections();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button at top-left */}
        <div className="mb-8">
          <button
            onClick={() => setCurrentStep(3)}
            className="flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Quay lại chọn Photobooth</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💕 Lịch Trình Hẹn Hò Của Chúng Ta
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Ngày hẹn hò đặc biệt từ Edison đến về nhà! ✨
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📅 Timeline Romantic
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                11:00
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">🍜 Ăn trưa</h3>
                {selectedLunch?.name ? (
                  <p className="text-gray-800 font-medium">{selectedLunch.name}</p>
                ) : (
                  <p className="text-red-600 font-semibold">Chưa chọn quán ăn trưa</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                13:30
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">☕ Cafe & Makeup</h3>
                {selectedCafe?.name ? (
                  <p className="text-gray-800 font-medium">{selectedCafe.name}</p>
                ) : (
                  <p className="text-red-600 font-semibold">Chưa chọn quán cafe</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                15:00
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">📸 Photobooth</h3>
                {selectedPhotobooth?.name ? (
                  <p className="text-gray-800 font-medium">{selectedPhotobooth.name}</p>
                ) : (
                  <p className="text-red-600 font-semibold">Chưa chọn photobooth</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                17:30
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">🍽️ Dinner tại Pezzi</h3>
                <p className="text-gray-800 font-medium">Pezzi - Western & Wine</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                20:00
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">🏍️ Lượn lờ xe máy</h3>
                <p className="text-gray-800 font-medium">Tận hưởng không khí đêm thành phố</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                22:00
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">🏠 Đưa em về nhà</h3>
                <p className="text-gray-800 font-medium">Kết thúc ngày hẹn hò đáng nhớ</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="flex gap-3">
              <button
                onClick={handleSaveAndNew}
                disabled={!selectedLunch?.name || !selectedCafe?.name || !selectedPhotobooth?.name}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
              >
                ✅ Lưu & Tạo mới
              </button>
              
              <button
                disabled={!selectedLunch?.name || !selectedCafe?.name || !selectedPhotobooth?.name}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-lg font-medium transition-colors"
              >
                💕 Share lịch trình
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
