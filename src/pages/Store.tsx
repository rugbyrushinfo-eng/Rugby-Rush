
import { products } from '@/data/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

export default function Store() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl mb-4">THE STORE</h1>
        <p className="text-white/60 text-lg">Support local rugby. Wear the brand. Get the gear.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="border-white/5 bg-white/5 group overflow-hidden">
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-rugby-gold text-black font-bold uppercase">{product.category}</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl leading-tight mb-2 uppercase font-display">{product.name}</h3>
              <div className="text-2xl text-rugby-gold font-display">{product.price}</div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
               <Button className="w-full bg-white text-black hover:bg-rugby-gold hover:text-black font-bold gap-2">
                 <ShoppingCart className="h-4 w-4" /> ADD TO BAG
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-20 rounded-3xl bg-white/5 p-12 text-center border border-white/10 uppercase tracking-widest italic opacity-50">
         More Gear Dropping Soon
      </div>
    </div>
  );
}
