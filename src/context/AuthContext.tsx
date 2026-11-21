import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types/dashboard';
import { hospitalApi } from '@/services/api';

interface AuthContextType {
  currentUser: User | null;
  currentRole: UserRole;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loginDemo: (role: UserRole) => Promise<void>;
  switchRole: (role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check saved session in localStorage
    const savedUser = localStorage.getItem('lunaria_auth_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('lunaria_auth_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const res = await hospitalApi.login(email, password);
      if (res.success && res.user) {
        setCurrentUser(res.user);
        localStorage.setItem('lunaria_auth_user', JSON.stringify(res.user));
        setIsLoading(false);
        return true;
      }
    } catch (e) {}
    setIsLoading(false);
    return false;
  };

  const loginDemo = async (role: UserRole) => {
    setIsLoading(true);
    const res = await hospitalApi.login(undefined, undefined, role);
    if (res.success && res.user) {
      setCurrentUser(res.user);
      localStorage.setItem('lunaria_auth_user', JSON.stringify(res.user));
    }
    setIsLoading(false);
  };

  const switchRole = async (role: UserRole) => {
    await loginDemo(role);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('lunaria_auth_user');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('patientData');
  };

  const currentRole: UserRole = currentUser?.role || 'patient';

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentRole,
        isLoading,
        login,
        loginDemo,
        switchRole,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
