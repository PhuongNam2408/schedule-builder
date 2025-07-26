"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Cafe, Restaurant } from "@/data/venues";

interface ScheduleContextType {
  selectedCafes: Cafe[];
  selectedRestaurants: Restaurant[];
  setSelectedCafes: (cafes: Cafe[]) => void;
  setSelectedRestaurants: (restaurants: Restaurant[]) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [selectedCafes, setSelectedCafes] = useState<Cafe[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <ScheduleContext.Provider
      value={{
        selectedCafes,
        selectedRestaurants,
        setSelectedCafes,
        setSelectedRestaurants,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  const context = useContext(ScheduleContext);
  if (context === undefined) {
    throw new Error("useSchedule must be used within a ScheduleProvider");
  }
  return context;
}
