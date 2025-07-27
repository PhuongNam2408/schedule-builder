"use client";

import { useAuth } from "@/context/AuthContext";
import { useSchedule } from "@/context/ScheduleContext";
import LoginForm from "@/components/LoginForm";
import HistoryPage from "@/components/HistoryPage";
import LunchSelection from "@/components/LunchSelection";
import CafeSelection from "@/components/CafeSelection";
import PhotoboothSelection from "@/components/PhotoboothSelection";
import Summary from "@/components/Summary";
import ScrollToTop from "@/components/ScrollToTop";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  const { user, isLoading } = useAuth();
  const { currentStep } = useSchedule();

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!user) {
    return <LoginForm onSuccess={() => {}} />;
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return "Trang chủ";
      case 1: return "Chọn quán ăn trưa";
      case 2: return "Chọn quán cafe";
      case 3: return "Chọn photobooth";
      case 4: return "Xác nhận lịch trình";
      default: return "Dating Planner";
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <DynamicBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {currentStep > 0 && (
          <div className="bg-white/90 shadow-md border-b border-rose-200 sticky top-0 z-20">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <h1 className="text-center text-xl font-bold text-pink-700">
                💕 Dating Planner - Bước {currentStep}/4: {getStepTitle()}
              </h1>
            </div>
          </div>
        )}
        
        <div className={`pt-4 ${currentStep === 0 ? '' : 'bg-white/5'}`}>
          {currentStep === 0 && <HistoryPage />}
          {currentStep === 1 && <LunchSelection />}
          {currentStep === 2 && <CafeSelection />}
          {currentStep === 3 && <PhotoboothSelection />}
          {currentStep === 4 && <Summary />}
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}