"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Cafe, Restaurant, LunchPlace, Photobooth } from "@/data/venues";

// History type for storing completed schedules
export interface ScheduleHistory {
  id: string;
  date: string;
  lunch: LunchPlace;
  cafe: Cafe;
  photobooth: Photobooth;
  restaurant: Restaurant;
}

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
  
  // History
  scheduleHistory: ScheduleHistory[];
  saveCurrentSchedule: () => void;
  clearHistory: () => void;
  
  // Reset
  resetSelections: () => void;
  
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
  
  // History state
  const [scheduleHistory, setScheduleHistory] = useState<ScheduleHistory[]>([]);
  
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for history page

  // Load history from API on mount
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const response = await fetch('/api/schedule');
        if (response.ok) {
          const data = await response.json();
          setScheduleHistory(data.schedules || []);
        }
      } catch (error) {
        console.error('Error loading schedule history:', error);
        // Fallback to localStorage if API fails
        const savedHistory = localStorage.getItem('dating-schedule-history');
        if (savedHistory) {
          try {
            setScheduleHistory(JSON.parse(savedHistory));
          } catch (error) {
            console.error('Error loading from localStorage:', error);
          }
        }
      }
    };
    
    loadHistory();
  }, []);

  // Remove localStorage sync as we're using API now
  const saveToAPI = async (newHistory: ScheduleHistory[]) => {
    try {
      await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ schedules: newHistory }),
      });
    } catch (error) {
      console.error('Error saving to API:', error);
      // Fallback to localStorage
      localStorage.setItem('dating-schedule-history', JSON.stringify(newHistory));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const saveCurrentSchedule = async () => {
    console.log('Saving schedule with:', { selectedLunch, selectedCafe, selectedPhotobooth });
    
    if (selectedLunch && selectedCafe && selectedPhotobooth) {
      // Create a mock restaurant for Pezzi since it's hardcoded
      const pezziRestaurant: Restaurant = {
        id: 'pezzi',
        name: 'Pezzi',
        address: 'Edison',
        image: '/images/pezzi.jpg',
        tiktokUrl: 'https://www.tiktok.com/@pezzirestaurant'
      };

      const newSchedule: ScheduleHistory = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('vi-VN'),
        lunch: selectedLunch,
        cafe: selectedCafe,
        photobooth: selectedPhotobooth,
        restaurant: pezziRestaurant,
      };
      
      console.log('Adding new schedule:', newSchedule);
      const updatedHistory = [newSchedule, ...scheduleHistory];
      setScheduleHistory(updatedHistory);
      console.log('Updated history:', updatedHistory);
      
      // Save to API
      await saveToAPI(updatedHistory);
    } else {
      console.log('Missing selections:', { selectedLunch: !!selectedLunch, selectedCafe: !!selectedCafe, selectedPhotobooth: !!selectedPhotobooth });
    }
  };

  const clearHistory = async () => {
    setScheduleHistory([]);
    await saveToAPI([]);
  };

  const resetSelections = () => {
    setSelectedLunch(null);
    setSelectedCafe(null);
    setSelectedPhotobooth(null);
    setSelectedRestaurant(null);
    setCurrentStep(0); // Go back to history page
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
        
        // History
        scheduleHistory,
        saveCurrentSchedule,
        clearHistory,
        resetSelections,
        
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
