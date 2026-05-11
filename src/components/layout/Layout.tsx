
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useApp } from '@/context/AppContext';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { facebookUrl } = useApp();
  return (
    <div className="flex min-h-screen flex-col bg-rugby-black font-sans text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="mt-auto border-t border-zinc-800 bg-black/50 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-600 gap-4">
            <div>© {new Date().getFullYear()} RUGBY RUSH MEDIA • FOR THE CULTURE</div>
            <div className="flex gap-6">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rugby-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-rugby-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-rugby-gold transition-colors">WhatsApp Updates</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
