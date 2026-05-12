
import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { useApp } from '@/context/AppContext';
import { Separator } from '@/components/ui/separator';

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useApp();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R ', '').replace(',', ''));
    return sum + price * item.quantity;
  }, 0);

  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Checkout functionality would connect to Yoco or Paystack here! Cart cleared for demo.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="relative text-white hover:text-white/80" />
        }
      >
        <ShoppingBag className="h-5 w-5" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rugby-blue text-[10px] font-bold text-white">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col border-white/10 bg-rugby-black text-white sm:max-w-md">
        <SheetHeader className="border-b border-white/5 pb-6">
          <SheetTitle className="text-2xl font-display italic text-white uppercase tracking-tighter">Your Bag</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 opacity-40">
              <ShoppingBag className="h-12 w-12" />
              <p className="text-sm font-bold uppercase tracking-widest">Your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded bg-white/5">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm font-bold uppercase">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-white/40 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-white/60">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-white/10 rounded overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-white/5"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-7 w-7 flex items-center justify-center hover:bg-white/5"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="mt-auto border-t border-white/5 pt-6">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white/40 uppercase">Subtotal</span>
                <span className="text-xl font-display">R {total.toFixed(2)}</span>
              </div>
              <Button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full h-14 bg-white text-rugby-blue hover:bg-rugby-blue hover:text-white font-black uppercase tracking-widest"
              >
                {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT NOW'}
              </Button>
              <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
                Secure payment powered by South African fintech
              </p>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
