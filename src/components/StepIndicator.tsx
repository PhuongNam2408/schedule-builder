"use client";

import { Coffee, UtensilsCrossed, CheckCircle, History } from "lucide-react";
import { useSchedule } from "@/context/ScheduleContext";
import Link from "next/link";

const steps = [
  { id: 1, name: "Chọn Cà Phê", icon: Coffee },
  { id: 2, name: "Chọn Nhà Hàng", icon: UtensilsCrossed },
  { id: 3, name: "Xác Nhận", icon: CheckCircle },
];

export default function StepIndicator() {
  const { currentStep } = useSchedule();

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isActive
                        ? "bg-blue-600 border-blue-600 text-white"
                        : isCompleted
                        ? "bg-green-600 border-green-600 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`ml-3 text-sm font-medium ${
                      isActive
                        ? "text-blue-600"
                        : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`ml-6 w-16 h-0.5 ${
                        isCompleted ? "bg-green-600" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          
          <Link
            href="/history"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <History className="w-5 h-5" />
            <span className="text-sm font-medium">Xem lịch sử</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
