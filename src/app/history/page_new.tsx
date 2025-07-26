"use client";

import { History, Coffee, UtensilsCrossed, Star, MapPin, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { Cafe, Restaurant } from "@/data/venues";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Schedule {
  id: string;
  cafes: Cafe[];
  restaurants: Restaurant[];
  createdAt: number;
}

export default function HistoryPage() {
  const { data: schedules, error, isLoading } = useSWR<Schedule[]>("/api/schedule", fetcher);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("vi-VN", {
      year: "numeric",
      month: "long", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <p className="text-red-600 text-lg mb-4">Có lỗi xảy ra khi tải dữ liệu</p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải lịch sử...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại</span>
            </Link>
            <div className="flex items-center gap-3">
              <History className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Lịch Sử Lịch Trình</h1>
                <p className="text-gray-600">Tất cả lịch trình đã được tạo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {!schedules || schedules.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <History className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Chưa có lịch trình nào</h2>
              <p className="text-gray-600 mb-6">Hãy tạo lịch trình đầu tiên của bạn!</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Tạo lịch trình mới
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {schedules.map((schedule) => (
                <div key={schedule.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Schedule Header */}
                  <div className="bg-gray-50 border-b px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Lịch trình #{schedule.id}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Tạo lúc: {formatDate(schedule.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {schedule.cafes.length + schedule.restaurants.length} địa điểm
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Cafes */}
                      {schedule.cafes.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Coffee className="w-5 h-5 text-amber-600" />
                            <h4 className="font-medium text-gray-800">
                              Quán Cà Phê ({schedule.cafes.length})
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {schedule.cafes.map((cafe) => (
                              <div key={cafe.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                                <Image
                                  src={cafe.image}
                                  alt={cafe.name}
                                  width={60}
                                  height={60}
                                  className="w-15 h-15 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-medium text-gray-800 truncate">
                                    {cafe.name}
                                  </h5>
                                  <div className="flex items-center text-xs text-gray-600 mb-1">
                                    <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                                    <span className="truncate">{cafe.address}</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center">
                                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                      <span>{cafe.rating}</span>
                                    </div>
                                    <span className="text-green-600 font-medium">
                                      {cafe.priceRange}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Restaurants */}
                      {schedule.restaurants.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <UtensilsCrossed className="w-5 h-5 text-orange-600" />
                            <h4 className="font-medium text-gray-800">
                              Nhà Hàng ({schedule.restaurants.length})
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {schedule.restaurants.map((restaurant) => (
                              <div key={restaurant.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                                <Image
                                  src={restaurant.image}
                                  alt={restaurant.name}
                                  width={60}
                                  height={60}
                                  className="w-15 h-15 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-medium text-gray-800 truncate">
                                    {restaurant.name}
                                  </h5>
                                  <div className="flex items-center text-xs text-gray-600 mb-1">
                                    <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                                    <span className="truncate">{restaurant.address}</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center">
                                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                      <span>{restaurant.rating}</span>
                                    </div>
                                    <span className="text-green-600 font-medium">
                                      {restaurant.priceRange}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Create New Schedule Button */}
              <div className="text-center pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Tạo lịch trình mới
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
