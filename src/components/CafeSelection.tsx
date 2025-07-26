"use client";

import { useState } from "react";
import Image from "next/image";
import { Coffee, Star, MapPin, Check } from "lucide-react";
import { cafes, Cafe } from "@/data/venues";
import { useSchedule } from "@/context/ScheduleContext";

export default function CafeSelection() {
  const { selectedCafes, setSelectedCafes, setCurrentStep } = useSchedule();
  const [tempSelected, setTempSelected] = useState<Cafe[]>(selectedCafes);

  const toggleCafe = (cafe: Cafe) => {
    setTempSelected(prev => {
      const isSelected = prev.some(c => c.id === cafe.id);
      if (isSelected) {
        return prev.filter(c => c.id !== cafe.id);
      } else {
        return [...prev, cafe];
      }
    });
  };

  const handleNext = () => {
    setSelectedCafes(tempSelected);
    setCurrentStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Coffee className="w-16 h-16 mx-auto mb-4 text-amber-600" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Chọn Quán Cà Phê
        </h1>
        <p className="text-gray-600">
          Chọn những quán cà phê bạn muốn ghé thăm
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cafes.map((cafe) => {
          const isSelected = tempSelected.some(c => c.id === cafe.id);
          return (
            <div
              key={cafe.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "ring-2 ring-amber-500 transform scale-105"
                  : "hover:shadow-lg hover:transform hover:scale-102"
              }`}
              onClick={() => toggleCafe(cafe)}
            >
              <div className="relative">
                <Image
                  src={cafe.image}
                  alt={cafe.name}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white rounded-full p-2">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {cafe.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {cafe.address}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{cafe.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {cafe.priceRange}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{cafe.specialty}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Đã chọn {tempSelected.length} quán cà phê
        </p>
        <button
          onClick={handleNext}
          disabled={tempSelected.length === 0}
          className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Tiếp theo: Chọn nhà hàng
        </button>
      </div>
    </div>
  );
}
