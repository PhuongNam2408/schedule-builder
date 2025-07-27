"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Cafe, Restaurant, LunchPlace, Photobooth, defaultSelections } from "@/data/venues";

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
  loadDefaultSchedule: () => void;
  
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

  // Load history from API on mount và setup polling để sync với database chung
  useEffect(() => {
    // Load initial data
    loadHistory();
    
    // Setup polling để tự động refresh shared history mỗi 10 giây
    const interval = setInterval(() => {
      loadHistory();
    }, 10000); // 10 seconds
    
    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  // Save to API - chỉ thêm schedule mới, không ghi đè toàn bộ
  const saveNewScheduleToAPI = async (newSchedule: ScheduleHistory) => {
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSchedule),
      });
      
      if (response.ok) {
        // Reload lại toàn bộ history từ server để đồng bộ với tất cả users
        await loadHistory();
      }
    } catch (error) {
      console.error('Error saving to API:', error);
      // Fallback to localStorage chỉ khi API thất bại hoàn toàn
      const currentHistory = [...scheduleHistory];
      const updatedHistory = [newSchedule, ...currentHistory];
      localStorage.setItem('dating-schedule-history', JSON.stringify(updatedHistory));
      setScheduleHistory(updatedHistory);
    }
  };

  // Load history function để có thể gọi lại
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
    
    if (selectedLunch?.name && selectedCafe?.name && selectedPhotobooth?.name) {
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
      
      console.log('Adding new schedule to shared database:', newSchedule);
      
      // Thêm vào local state trước để UI responsive
      const updatedHistory = [newSchedule, ...scheduleHistory];
      setScheduleHistory(updatedHistory);
      
      // Lưu vào shared database - tất cả users sẽ thấy
      await saveNewScheduleToAPI(newSchedule);
    } else {
      console.log('Missing selections or invalid data:', { 
        selectedLunch: selectedLunch?.name || 'missing', 
        selectedCafe: selectedCafe?.name || 'missing', 
        selectedPhotobooth: selectedPhotobooth?.name || 'missing' 
      });
    }
  };

  const clearHistory = async () => {
    try {
      // Clear từ database shared cho tất cả users
      const response = await fetch('/api/schedule/clear', {
        method: 'POST',
      });
      
      if (response.ok) {
        setScheduleHistory([]);
        // Chỉ load default khi user chủ động xóa
        console.log('History cleared by user, loading default schedule...');
        setTimeout(() => {
          loadDefaultSchedule();
        }, 500);
      }
    } catch (error) {
      console.error('Error clearing history:', error);
      // Fallback to localStorage clear
      localStorage.removeItem('dating-schedule-history');
      setScheduleHistory([]);
      // Chỉ load default khi user chủ động xóa
      setTimeout(() => {
        loadDefaultSchedule();
      }, 500);
    }
  };

  const resetSelections = () => {
    setSelectedLunch(null);
    setSelectedCafe(null);
    setSelectedPhotobooth(null);
    setSelectedRestaurant(null);
    setCurrentStep(0); // Go back to history page
  };

  const loadDefaultSchedule = async () => {
    // Tạo lịch trình default
    const pezziRestaurant: Restaurant = {
      id: 'pezzi-default',
      name: 'Pezzi - Western & Wine',
      address: 'Edison',
      image: '/images/pezzi.jpg',
      tiktokUrl: 'https://www.tiktok.com/@pezzirestaurant'
    };

    const defaultSchedule: ScheduleHistory = {
      id: `default-${Date.now()}`,
      date: new Date().toLocaleDateString('vi-VN'),
      lunch: defaultSelections.lunch!,
      cafe: defaultSelections.cafe!,
      photobooth: defaultSelections.photobooth!,
      restaurant: pezziRestaurant,
    };

    // Thêm vào local state
    const updatedHistory = [defaultSchedule, ...scheduleHistory];
    setScheduleHistory(updatedHistory);
    
    console.log('Loaded default schedule:', defaultSchedule);
    
    // Lưu vào shared database
    await saveNewScheduleToAPI(defaultSchedule);
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
        loadDefaultSchedule,
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
