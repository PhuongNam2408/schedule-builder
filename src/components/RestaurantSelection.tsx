"use client";

import { useState } from "react";
import Image from "next/image";
import { UtensilsCrossed, Star, MapPin, Check, ArrowLeft } from "lucide-react";
import { restaurants, Restaurant } from "@/data/venues";
import { useSchedule } from "@/context/ScheduleContext";

export default function RestaurantSelection() {
  const { selectedRestaurants, setSelectedRestaurants, setCurrentStep } = useSchedule();
  const [tempSelected, setTempSelected] = useState<Restaurant[]>(selectedRestaurants);

  const toggleRestaurant = (restaurant: Restaurant) => {
    setTempSelected(prev => {
      const isSelected = prev.some(r => r.id === restaurant.id);
      if (isSelected) {
        return prev.filter(r => r.id !== restaurant.id);
      } else {
        return [...prev, restaurant];
      }
    });
  };

  const handleNext = () => {
    setSelectedRestaurants(tempSelected);
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-orange-600" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Chọn Nhà Hàng
        </h1>
        <p className="text-gray-600">
          Chọn những nhà hàng bạn muốn thưởng thức
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {restaurants.map((restaurant) => {
          const isSelected = tempSelected.some(r => r.id === restaurant.id);
          return (
            <div
              key={restaurant.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "ring-2 ring-orange-500 transform scale-105"
                  : "hover:shadow-lg hover:transform hover:scale-102"
              }`}
              onClick={() => toggleRestaurant(restaurant)}
            >
              <div className="relative">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-2">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {restaurant.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {restaurant.address}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {restaurant.priceRange}
                  </span>
                </div>
                <p className="text-sm text-gray-500">Ẩm thực: {restaurant.cuisine}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Đã chọn {tempSelected.length} nhà hàng
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={tempSelected.length === 0}
          className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Tiếp theo: Xem lịch trình
        </button>
      </div>
    </div>
  );
}
