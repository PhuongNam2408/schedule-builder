"use client";

import { useSchedule } from "@/context/ScheduleContext";
import CafeSelection from "@/components/CafeSelection";
import RestaurantSelection from "@/components/RestaurantSelection";
import Summary from "@/components/Summary";
import StepIndicator from "@/components/StepIndicator";

export default function Home() {
  const { currentStep } = useSchedule();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🍰 Schedule Builder
          </h1>
          <p className="text-gray-600 text-lg">
            Tạo lịch trình cà phê & ăn uống của bạn
          </p>
        </div>

        <StepIndicator />

        <div className="max-w-4xl mx-auto mt-8">
          {currentStep === 1 && <CafeSelection />}
          {currentStep === 2 && <RestaurantSelection />}
          {currentStep === 3 && <Summary />}
        </div>
      </div>
    </main>
  );
}