'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowLeft } from 'lucide-react';
import { lunchPlaces, LunchPlace } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function LunchSelection() {
  const { selectedLunch, setSelectedLunch, nextStep, setCurrentStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (lunch: LunchPlace) => {
    setSelectedLunch(lunch);
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
                  <a 
                    href={lunch.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                  >
                    <span className="mr-1">📱</span>
                    <span>Xem TikTok</span>
                  </a>
                  
                  {selectedLunch?.id === lunch.id && (
                    <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Đã chọn ❤️
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic">
            💡 Mẹo: Chọn quán gần Edison để tiết kiệm thời gian di chuyển nhé!
          </p>
        </div>
      </div>
    </div>
  );
}
