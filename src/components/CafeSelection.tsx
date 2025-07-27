"use client";

import { useState } from "react";
import Image from "next/image";
import { Coffee, MapPin, ArrowLeft } from 'lucide-react';
import { cafes, Cafe } from "@/data/venues";
import { useSchedule } from "@/context/ScheduleContext";

export default function CafeSelection() {
  const { selectedCafe, setSelectedCafe, nextStep, prevStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (cafe: Cafe) => {
    setSelectedCafe(cafe);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      {/* Back Button - Top Left */}
      <div className="max-w-6xl mx-auto mb-4">
        <button
          onClick={prevStep}
          className="flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Quay lại chọn quán trưa</span>
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ☕ Chọn Quán Cafe Lãng Mạn
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Nơi em có thể makeup xinh xắn và quay những video TikTok cực cute! 💄✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cafes.map((cafe) => (
            <div
              key={cafe.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedCafe?.id === cafe.id
                  ? 'ring-4 ring-amber-400 scale-105'
                  : hoveredId === cafe.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleSelect(cafe)}
              onMouseEnter={() => setHoveredId(cafe.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={cafe.image}
                  alt={cafe.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white rounded-full p-2">
                  <Coffee className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cafe.name}
                </h3>
                
                <div className="flex items-center text-gray-700 font-medium mb-3">
                  <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="text-sm">{cafe.address}</span>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={cafe.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 font-medium text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    📱 Xem TikTok
                  </a>
                  <span className="text-amber-600 font-bold">
                    {selectedCafe?.id === cafe.id ? '✅ Đã chọn' : '☕ Chọn'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
