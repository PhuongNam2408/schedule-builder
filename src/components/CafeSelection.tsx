"use client";

import { useState } from "react";
import Image from "next/image";
import { Coffee, MapPin, ArrowLeft, Plus } from 'lucide-react';
import { cafes, Cafe } from "@/data/venues";
import { useSchedule } from "@/context/ScheduleContext";

export default function CafeSelection() {
  const { selectedCafe, setSelectedCafe, nextStep, prevStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customName, setCustomName] = useState('');

  const handleSelect = (cafe: Cafe) => {
    setSelectedCafe(cafe);
    setTimeout(() => nextStep(), 500);
  };

  const handleCustomSubmit = async () => {
    if (!customName.trim()) return;

    const customCafe: Cafe = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      address: 'Địa chỉ tùy chọn',
      image: '/placeholder-cafe.jpg',
      tiktokUrl: '#'
    };

    // Lưu vào database
    try {
      await fetch('/api/custom-venues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'cafe',
          name: customName.trim()
        })
      });
    } catch (error) {
      console.error('Error saving custom venue:', error);
    }

    setSelectedCafe(customCafe);
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
                  {cafe.tiktokUrl && cafe.tiktokUrl !== "" && (
                    <a
                      href={cafe.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      📱 Xem TikTok
                    </a>
                  )}
                  <span className="text-amber-600 font-bold">
                    {selectedCafe?.id === cafe.id ? '✅ Đã chọn' : '☕ Chọn'}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Custom option card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-amber-300 hover:border-amber-400 transition-all duration-300">
            {!showCustomInput ? (
              <div 
                className="p-8 text-center cursor-pointer hover:bg-amber-50 transition-colors duration-200"
                onClick={() => setShowCustomInput(true)}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Quán cafe khác
                </h3>
                <p className="text-gray-600 text-sm">
                  Nhập tên quán cafe bạn muốn đi
                </p>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Nhập tên quán cafe của bạn
                </h3>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="VD: Starbucks Landmark 81..."
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleCustomSubmit()}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleCustomSubmit}
                    disabled={!customName.trim()}
                    className="flex-1 bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Chọn quán này ☕️
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
