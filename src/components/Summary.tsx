"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircle, Coffee, UtensilsCrossed, ArrowLeft, Star, MapPin } from "lucide-react";
import { useSchedule } from "@/context/ScheduleContext";

export default function Summary() {
  const { selectedCafes, selectedRestaurants, setCurrentStep } = useSchedule();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleConfirm = async () => {
    if (selectedCafes.length === 0 && selectedRestaurants.length === 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cafes: selectedCafes,
          restaurants: selectedRestaurants,
        }),
      });

      if (response.ok) {
        router.push("/history");
      } else {
        throw new Error("Failed to save schedule");
      }
    } catch (error) {
      console.error("Error saving schedule:", error);
      alert("Có lỗi xảy ra khi lưu lịch trình. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Xác Nhận Lịch Trình
        </h1>
        <p className="text-gray-600">
          Kiểm tra lại lịch trình của bạn trước khi lưu
        </p>
      </div>

      <div className="space-y-8">
        {/* Quán Cà Phê */}
        {selectedCafes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-6 h-6 text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Quán Cà Phê ({selectedCafes.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCafes.map((cafe) => (
                <div key={cafe.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <Image
                    src={cafe.image}
                    alt={cafe.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{cafe.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {cafe.address}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                        <span className="text-sm">{cafe.rating}</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {cafe.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nhà Hàng */}
        {selectedRestaurants.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Nhà Hàng ({selectedRestaurants.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {restaurant.address}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                        <span className="text-sm">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {restaurant.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nếu không có gì được chọn */}
        {selectedCafes.length === 0 && selectedRestaurants.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">
              Bạn chưa chọn quán nào. Vui lòng quay lại để chọn.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại
        </button>

        <button
          onClick={handleConfirm}
          disabled={
            isSubmitting || (selectedCafes.length === 0 && selectedRestaurants.length === 0)
          }
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          {isSubmitting ? "Đang lưu..." : "Xác nhận lịch trình"}
        </button>
      </div>
    </div>
  );
}
