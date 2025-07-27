'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Utensils, MapPin, ArrowLeft } from 'lucide-react';
import { restaurants, Restaurant } from '@/data/venues';
import { useSchedule } from '@/context/ScheduleContext';

export default function RestaurantSelection() {
  const { selectedRestaurant, setSelectedRestaurant, nextStep, prevStep } = useSchedule();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setTimeout(() => nextStep(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button at top-left */}
        <div className="mb-8">
          <button
            onClick={prevStep}
            className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Trở lại</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🍽️ Chọn Nhà Hàng Ăn Tối Lãng Mạn
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kết thúc ngày hoàn hảo với bữa tối thật ngon tại nhà hàng yêu thích! 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedRestaurant?.id === restaurant.id
                  ? 'ring-4 ring-red-400 scale-105'
                  : hoveredId === restaurant.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleSelect(restaurant)}
              onMouseEnter={() => setHoveredId(restaurant.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full p-2">
                  <Utensils className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {restaurant.name}
                </h3>
                
                <div className="flex items-center text-gray-700 font-medium mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{restaurant.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={restaurant.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:text-pink-600 text-sm font-medium"
                  >
                    <span className="mr-1">📱</span>
                    <span>Xem TikTok</span>
                  </a>
                  
                  {selectedRestaurant?.id === restaurant.id && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold text-center">
                      Đã chọn 🍽️
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic">
            💡 Mẹo: Pezzi là lựa chọn hàng đầu cho những buổi hẹn hò đặc biệt! 🍕💕
          </p>
        </div>
      </div>
    </div>
  );
}
