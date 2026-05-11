
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, Heart, MessageCircle } from 'lucide-react';

const memes = [
  {
    id: 'm1',
    image: 'https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=1000&auto=format&fit=crop',
    caption: 'When you tell the hooker to throw it straight...',
    likes: '2.4k',
    comments: 156
  },
  {
    id: 'm2',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    caption: 'The face you make when the Sea Point wind kicks in.',
    likes: '1.8k',
    comments: 89
  },
  {
    id: 'm3',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
    caption: 'SLA players on a Friday night vs Saturday morning.',
    likes: '3.2k',
    comments: 245
  },
];

export default function Memes() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
       <div className="mb-12">
        <h1 className="text-5xl md:text-7xl mb-4 text-rugby-gold">THE BANTER ZONE</h1>
        <p className="text-white/60 text-lg">Cape Town club rugby culture in its purest form. Don't take it personally.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memes.map((meme) => (
          <Card key={meme.id} className="border-white/10 bg-white/5 overflow-hidden">
             <div className="aspect-square relative overflow-hidden">
                <img src={meme.image} className="w-full h-full object-cover" />
             </div>
             <CardContent className="p-6">
                <p className="text-lg font-bold mb-6">"{meme.caption}"</p>
                <div className="flex items-center justify-between">
                   <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-white/60 hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" /> {meme.likes}
                      </button>
                      <button className="flex items-center gap-1 text-white/60 hover:text-rugby-gold transition-colors">
                        <MessageCircle className="h-5 w-5" /> {meme.comments}
                      </button>
                   </div>
                   <Button size="icon" variant="ghost" className="text-white/60 hover:text-rugby-gold">
                      <Share2 className="h-5 w-5" />
                   </Button>
                </div>
             </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
         <Button size="lg" className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90">
            LOAD MORE FROM FACEBOOK
         </Button>
      </div>
    </div>
  );
}
