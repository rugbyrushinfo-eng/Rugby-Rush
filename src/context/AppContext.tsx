import React, { createContext, useContext, useState, useEffect } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

interface AppContextType {
  navLinks: NavLink[];
  setNavLinks: (links: NavLink[]) => void;
  facebookUrl: string;
  setFacebookUrl: (url: string) => void;
}

const defaultLinks: NavLink[] = [
  { name: 'News', href: '/news' },
  { name: 'Fixtures', href: '/fixtures' },
  { name: 'Logs', href: '/logs' },
  { name: 'Memes', href: '/memes' },
  { name: 'Community', href: '/community' },
  { name: 'Store', href: '/store' },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [navLinks, setNavLinksState] = useState<NavLink[]>(() => {
    const saved = localStorage.getItem('rugby-rush-nav');
    return saved ? JSON.parse(saved) : defaultLinks;
  });

  const [facebookUrl, setFacebookUrlState] = useState(() => {
    return localStorage.getItem('rugby-rush-fb') || 'https://www.facebook.com/profile.php?id=61580741091678';
  });

  const setNavLinks = (links: NavLink[]) => {
    setNavLinksState(links);
    localStorage.setItem('rugby-rush-nav', JSON.stringify(links));
  };

  const setFacebookUrl = (url: string) => {
    setFacebookUrlState(url);
    localStorage.setItem('rugby-rush-fb', url);
  };

  return (
    <AppContext.Provider value={{ navLinks, setNavLinks, facebookUrl, setFacebookUrl }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
