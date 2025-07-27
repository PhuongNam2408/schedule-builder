'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { accounts } from '@/data/accounts';

interface User {
  username: string;
  displayName: string;
  joinDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('dating-planner-current-user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('dating-planner-current-user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Tìm tài khoản trong danh sách accounts
      const foundAccount = accounts.find(
        account => account.username === username && account.password === password
      );

      if (foundAccount) {
        const userData: User = {
          username: foundAccount.username,
          displayName: foundAccount.displayName,
          joinDate: foundAccount.joinDate
        };
        
        setUser(userData);
        localStorage.setItem('dating-planner-current-user', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: 'Tên đăng nhập hoặc mật khẩu không đúng' };
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      return { success: false, error: 'Có lỗi xảy ra khi đăng nhập' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dating-planner-current-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
