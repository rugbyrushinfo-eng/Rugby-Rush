
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X, Facebook, Instagram, Youtube, User, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useApp } from '@/context/AppContext';
import { CartDrawer } from '../store/CartDrawer';

export function Navbar() {
  const { navLinks, facebookUrl } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-rugby-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-rugby-blue px-3 py-1 font-display italic text-2xl tracking-tighter transform -skew-x-12 text-white">
              RUGBY RUSH
            </div>
            <div className="hidden lg:block text-zinc-500 font-bold uppercase text-[10px] tracking-widest ml-2">
              Cape Town's Digital Clubhouse
            </div>
          </Link>
        </div>

        <div className="hidden md:flex md:gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors hover:text-white ${
                location.pathname === link.href ? 'text-white underline underline-offset-4 decoration-2 decoration-rugby-blue' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
            <Search className="h-5 w-5" />
          </Button>

          <CartDrawer />
          
          <Link to="/admin">
            <Button variant="outline" className="hidden border-white text-white hover:bg-white hover:text-rugby-blue md:flex">
              <User className="mr-2 h-4 w-4" />
              LOGIN
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-white md:hidden" />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="border-white/10 bg-rugby-black p-0 text-white">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl">RUGBY RUSH</span>
                </div>
                <div className="mt-12 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-display uppercase tracking-widest text-white hover:text-rugby-blue"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-4">
                   <Link to="/admin" onClick={() => setIsOpen(false)}>
                     <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-rugby-blue">
                       <User className="mr-2 h-4 w-4" />
                       ADMIN LOGIN
                     </Button>
                   </Link>
                   <Button className="w-full bg-white font-display text-rugby-blue hover:bg-zinc-200">
                    JOIN THE CLUB
                  </Button>
                  <div className="flex justify-center gap-6 py-4">
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-6 w-6 text-white/70 hover:text-white" />
                    </a>
                    <Instagram className="h-6 w-6 text-white/70" />
                    <Youtube className="h-6 w-6 text-white/70" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
