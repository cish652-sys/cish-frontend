"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, AppState } from "../types";

interface AppContextType {
  state: AppState;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: null,
  });

  const setUser = (user: User | null) => {
    setState((prev) => ({ ...prev, user }));
  };

  const setLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  return (
    <AppContext.Provider value={{ state, setUser, setLoading }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
