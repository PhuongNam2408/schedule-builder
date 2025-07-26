'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, MapPin, Star, DollarSign, Sparkles } from 'lucide-react';
import { photobooths, Photobooth } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function PhotoboothSelection() {
  const { selectedPhotobooth, setSelectedPhotobooth, nextStep, prevStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (photobooth: Photobooth) => {
    setSelectedPhotobooth(photobooth);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📸 Chọn Studio Photobooth
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Lưu lại những khoảnh khắc đẹp nhất của chúng ta! 📷💕
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photobooths.map((photobooth) => (
            <div
              key={photobooth.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedPhotobooth?.id === photobooth.id
                  ? 'ring-4 ring-purple-400 scale-105'
                  : hoveredId === photobooth.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleSelect(photobooth)}
              onMouseEnter={() => setHoveredId(photobooth.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={photobooth.image}
                  alt={photobooth.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">
                      {photobooth.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-purple-500 text-white rounded-full p-2">
                  <Camera className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {photobooth.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{photobooth.address}</span>
                </div>

                <div className="flex items-center text-green-600 mb-3">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-sm font-semibold">{photobooth.priceRange}</span>
                </div>

                <div className="flex items-start text-gray-500 mb-3">
                  <Sparkles className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{photobooth.features}</span>
                </div>

                {selectedPhotobooth?.id === photobooth.id && (
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                    Đã chọn 💜
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic mb-6">
            💡 Mẹo: Nhớ book trước để có slot đẹp nhất nhé! 📱
          </p>
          
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors font-medium"
          >
            ← Quay lại chọn quán cafe
          </button>
        </div>
      </div>
    </div>
  );
}
