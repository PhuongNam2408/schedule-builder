'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowLeft, Plus } from 'lucide-react';
import { lunchPlaces, LunchPlace } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function LunchSelection() {
  const { selectedLunch, setSelectedLunch, nextStep, setCurrentStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customName, setCustomName] = useState('');

  const handleSelect = (lunch: LunchPlace) => {
    setSelectedLunch(lunch);
    setTimeout(() => nextStep(), 500);
  };

  const handleCustomSubmit = async () => {
    if (!customName.trim()) return;

    const customLunch: LunchPlace = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      address: 'Địa chỉ tùy chọn',
      image: '/placeholder-restaurant.jpg',
      tiktokUrl: '#'
    };

    // Lưu vào database
    try {
      await fetch('/api/custom-venues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lunch',
          name: customName.trim()
        })
      });
    } catch (error) {
      console.error('Error saving custom venue:', error);
    }

    setSelectedLunch(customLunch);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button at top-left */}
        <div className="mb-8">
          <button
            onClick={() => setCurrentStep(0)}
            className="flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Về trang chủ</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💕 Chọn Quán Ăn Trưa Lãng Mạn
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Hãy chọn nơi để chúng ta cùng thưởng thức bữa trưa đầu tiên trong ngày hẹn hò đặc biệt này! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lunchPlaces.map((lunch) => (
            <div
              key={lunch.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedLunch?.id === lunch.id
                  ? 'ring-4 ring-pink-400 scale-105'
                  : hoveredId === lunch.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleSelect(lunch)}
              onMouseEnter={() => setHoveredId(lunch.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={lunch.image}
                  alt={lunch.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {lunch.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{lunch.address}</span>
                </div>

                <div className="flex items-center justify-between">
                  {lunch.tiktokUrl && lunch.tiktokUrl !== "" && (
                    <a 
                      href={lunch.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                    >
                      <span className="mr-1">📱</span>
                      <span>Xem TikTok</span>
                    </a>
                  )}
                  
                  {selectedLunch?.id === lunch.id && (
                    <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Đã chọn ❤️
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Custom option card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-pink-300 hover:border-pink-400 transition-all duration-300">
            {!showCustomInput ? (
              <div 
                className="p-8 text-center cursor-pointer hover:bg-pink-50 transition-colors duration-200"
                onClick={() => setShowCustomInput(true)}
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Quán khác
                </h3>
                <p className="text-gray-600 text-sm">
                  Nhập tên quán bạn muốn đi
                </p>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Nhập tên quán của bạn
                </h3>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="VD: Quán cơm mẹ nấu..."
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleCustomSubmit}
                    disabled={!customName.trim()}
                    className="flex-1 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Chọn quán này ❤️
                  </button>
                  <button
                    onClick={() => {
                      setShowCustomInput(false);
                      setCustomName('');
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
