import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  isOnline: boolean;
  setIsOnline: (v: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  isOnline: false,
  setIsOnline: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <AppContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
