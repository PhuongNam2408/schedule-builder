'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, MapPin, Star, DollarSign } from 'lucide-react';
import { lunchPlaces, LunchPlace } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function LunchSelection() {
  const { selectedLunch, setSelectedLunch, nextStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (lunch: LunchPlace) => {
    setSelectedLunch(lunch);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6">
      <div className="max-w-6xl mx-auto">
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
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">
                      {lunch.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {lunch.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{lunch.address}</span>
                </div>

                <div className="flex items-center text-green-600 mb-3">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">{lunch.priceRange}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{lunch.cuisine}</span>
                  </div>
                  
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
