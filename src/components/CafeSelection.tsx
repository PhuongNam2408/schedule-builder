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
          className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium flex items-center"
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
            Nơi em có thể makeup xinh xắn và quay những video TikTok cực cute! �✨
          </p>
        </div>        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{cafe.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={cafe.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                  >
                    <span className="mr-1">📱</span>
                    <span>Xem TikTok</span>
                  </a>
                  
                  {selectedCafe?.id === cafe.id && (
                    <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Đã chọn ☕
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic mb-6">
            💡 Mẹo: Chọn quán có không gian đẹp để em có thể quay TikTok thỏa thích! 📸
          </p>
          
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium"
          >
            ← Quay lại chọn quán trưa
          </button>
        </div>
      </div>
    </div>
  );
}
