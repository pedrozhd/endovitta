import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { mockSymptomLogs } from '../data/mockData';

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  gynecologicalHistory: string[];
  mainSymptoms: string;
  sleepHours: number;
  diet: string;
  exercises: string;
}

interface SymptomLog {
  id: number;
  date: string;
  painLevel: number;
  location: string;
  mood: string;
  symptoms: number[];
  notes: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User) => void;
  isOnboarded: boolean;
  symptomLogs: SymptomLog[];
  addSymptomLog: (log: SymptomLog) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [symptomLogs, setSymptomLogsState] = useState<SymptomLog[]>([]);

  useEffect(() => {
    const savedUser = storage.getUser();
    if (savedUser) {
      setUserState(savedUser);
    }
    const savedLogs = storage.getSymptomLogs();
    setSymptomLogsState(savedLogs.length > 0 ? savedLogs : mockSymptomLogs);
  }, []);

  const setUser = (newUser: User) => {
    setUserState(newUser);
    storage.setUser(newUser);
  };

  const addSymptomLog = (log: SymptomLog) => {
    const newLogs = [...symptomLogs, { ...log, id: Date.now() }];
    setSymptomLogsState(newLogs);
    storage.setSymptomLogs(newLogs);
  };

  const logout = () => {
    setUserState(null);
    setSymptomLogsState([]);
    storage.clearAll();
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isOnboarded: !!user,
        symptomLogs,
        addSymptomLog,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
