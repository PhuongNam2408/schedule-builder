"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Cafe, Restaurant, LunchPlace, Photobooth } from "@/data/venues";

interface ScheduleContextType {
  // Selections
  selectedLunch: LunchPlace | null;
  selectedCafe: Cafe | null;
  selectedPhotobooth: Photobooth | null;
  selectedRestaurant: Restaurant | null;
  
  // Setters
  setSelectedLunch: (lunch: LunchPlace | null) => void;
  setSelectedCafe: (cafe: Cafe | null) => void;
  setSelectedPhotobooth: (photobooth: Photobooth | null) => void;
  setSelectedRestaurant: (restaurant: Restaurant | null) => void;
  
  // Navigation
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  
  // Legacy (for backward compatibility)
  selectedCafes: Cafe[];
  selectedRestaurants: Restaurant[];
  setSelectedCafes: (cafes: Cafe[]) => void;
  setSelectedRestaurants: (restaurants: Restaurant[]) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  // New state for 4-step flow
  const [selectedLunch, setSelectedLunch] = useState<LunchPlace | null>(null);
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [selectedPhotobooth, setSelectedPhotobooth] = useState<Photobooth | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  
  // Legacy state
  const [selectedCafes, setSelectedCafes] = useState<Cafe[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>([]);
  
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        // New state
        selectedLunch,
        selectedCafe,
        selectedPhotobooth,
        selectedRestaurant,
        setSelectedLunch,
        setSelectedCafe,
        setSelectedPhotobooth,
        setSelectedRestaurant,
        
        // Navigation
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep,
        
        // Legacy
        selectedCafes,
        selectedRestaurants,
        setSelectedCafes,
        setSelectedRestaurants,
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
