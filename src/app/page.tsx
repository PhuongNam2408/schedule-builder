"use client";

import { useSchedule } from "@/context/ScheduleContext";
import LunchSelection from "@/components/LunchSelection";
import CafeSelection from "@/components/CafeSelection";
import PhotoboothSelection from "@/components/PhotoboothSelection";
import Summary from "@/components/Summary";

export default function Home() {
  const { currentStep } = useSchedule();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="bg-white/90 shadow-md border-b border-rose-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-center text-xl font-bold text-pink-700">
            💕 Dating Planner - Bước {currentStep}/4
          </h1>
        </div>
      </div>
      
      <div className="pt-4">
        {currentStep === 1 && <LunchSelection />}
        {currentStep === 2 && <CafeSelection />}
        {currentStep === 3 && <PhotoboothSelection />}
        {currentStep === 4 && <Summary />}
        <p className="text-center text-gray-600 mt-4">Testing all components...</p>
      </div>
    </main>
  );
}