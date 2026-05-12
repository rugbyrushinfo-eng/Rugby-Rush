import React, { createContext, useContext, useState, useEffect } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface AppContextType {
  navLinks: NavLink[];
  setNavLinks: (links: NavLink[]) => void;
  facebookUrl: string;
  setFacebookUrl: (url: string) => void;
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
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

  const [cart, setCart] = useState<CartItem[]>([]);

  const setNavLinks = (links: NavLink[]) => {
    setNavLinksState(links);
    localStorage.setItem('rugby-rush-nav', JSON.stringify(links));
  };

  const setFacebookUrl = (url: string) => {
    setFacebookUrlState(url);
    localStorage.setItem('rugby-rush-fb', url);
  };

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{ 
      navLinks, 
      setNavLinks, 
      facebookUrl, 
      setFacebookUrl,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
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
