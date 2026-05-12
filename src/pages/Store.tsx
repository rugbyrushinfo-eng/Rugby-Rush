
import { products } from '@/data/mockData';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Store() {
  const { addToCart } = useApp();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl mb-4">THE STORE</h1>
          <p className="text-white/60 text-lg">Support local rugby. Wear the brand. Get the gear.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="border-white/5 bg-white/5 group overflow-hidden cursor-pointer hover:border-rugby-blue/50 transition-colors"
            onClick={() => handleAddToCart(product)}
          >
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-rugby-blue text-white font-bold uppercase">{product.category}</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl leading-tight mb-2 uppercase font-display transition-colors group-hover:text-rugby-blue">{product.name}</h3>
              <div className="text-2xl text-white font-display">{product.price}</div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
               <Button 
                className={`w-full font-bold gap-2 transition-all duration-300 pointer-events-none ${
                  addedItem === product.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-rugby-blue hover:bg-rugby-blue hover:text-white'
                }`}
               >
                 {addedItem === product.id ? (
                   <>
                    <CheckCircle2 className="h-4 w-4" /> ADDED
                   </>
                 ) : (
                   <>
                    <ShoppingCart className="h-4 w-4" /> ADD TO BAG
                   </>
                 )}
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {addedItem && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 bg-rugby-blue text-white px-6 py-4 shadow-2xl font-black uppercase tracking-widest flex items-center gap-3 transform -skew-x-12"
          >
            <ShoppingCart className="h-5 w-5" />
            Item Added to Bag
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mt-20 rounded-3xl bg-white/5 p-12 text-center border border-white/10 uppercase tracking-widest italic opacity-50">
         More Gear Dropping Soon
      </div>
    </div>
  );
}
