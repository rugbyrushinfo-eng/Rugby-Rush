
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Play, TrendingUp, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { news, fixtures, standings } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useApp } from '@/context/AppContext';

export default function Home() {
  const { facebookUrl, addToCart } = useApp();
  const featured = news[0];
  const latestNews = news.slice(1, 4);

  const featuredProduct = {
    id: 'club-pack-1',
    name: 'Classic Club Pack',
    price: 'R 249.00',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=100&auto=format&fit=crop',
    category: 'Presets'
  };

  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Bento Grid Header / Top Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 min-h-[900px]">
          
          {/* Main Hero Card */}
          <div className="bento-card col-span-12 md:col-span-8 row-span-4 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <img 
              src="https://i.ibb.co/cKY90VXz/channels4-profile.jpg" 
              alt="Rugby Rush Hero" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="mt-auto p-8 z-20">
              <div className="label-tag mb-3">{featured.category} • Match Report</div>
              <h1 className="text-4xl md:text-6xl text-white mb-4 leading-none">
                {featured.title}
              </h1>
              <p className="text-zinc-300 text-sm max-w-lg mb-6">
                {featured.summary}
              </p>
              <Button className="bg-white text-black font-black uppercase px-6 py-2 text-sm transform transition hover:-translate-y-1 rounded-none">
                Read Full Report
              </Button>
            </div>
          </div>

          {/* Live/Results Card */}
          <div className="bento-card col-span-12 md:col-span-4 row-span-3 p-4">
            <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <span>Match Center</span>
              <span className="text-white flex items-center gap-1">Latest Results</span>
            </div>
            <div className="flex flex-col gap-2">
              {fixtures.filter(f => f.status === 'Finished').map(fixture => (
                <div key={fixture.id} className="match-card-bento">
                  <div className="flex justify-between text-sm font-bold mb-1 uppercase">
                    <span className="text-zinc-300">{fixture.homeTeam}</span>
                    <span className="text-white">{fixture.homeScore}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold opacity-60 uppercase">
                    <span className="text-zinc-300">{fixture.awayTeam}</span>
                    <span className="text-zinc-300">{fixture.awayScore}</span>
                  </div>
                  <div className="text-[10px] uppercase text-zinc-500 mt-2 tracking-tighter">
                    Final Result • {fixture.venue}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-[10px] font-bold uppercase text-zinc-500 hover:text-white">
              View All Fixtures
            </Button>
          </div>

          {/* Viral Bit */}
          <div className="bento-card col-span-12 md:col-span-4 row-span-1 flex-row items-center p-4 gap-4 bg-white/5">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl">🔥</div>
            <div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase">Viral of the Week</div>
              <div className="text-sm font-black italic uppercase">That Sidestep at Florida Park</div>
            </div>
          </div>

          {/* Standings Snippet */}
          <div className="bento-card col-span-12 md:col-span-3 row-span-2 p-4">
            <h3 className="text-xs font-black uppercase text-zinc-400 mb-4 tracking-widest">SLA Standings</h3>
            <div className="flex flex-col gap-3">
              {standings[0].standings.slice(0, 4).map((team, idx) => (
                <div key={team.team} className={`flex justify-between items-center py-1 border-b border-white/5 text-xs ${idx === 0 ? 'text-white font-black underline' : ''}`}>
                  <span className="font-bold">{idx + 1}. {team.team}</span>
                  <span className="font-mono">{team.points} pts</span>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-[10px] p-0 h-auto mt-4 text-zinc-500 uppercase">Full Logs</Button>
          </div>

          {/* Player Spotlight */}
          <div className="bento-card col-span-12 md:col-span-5 row-span-2 flex-row p-0">
             <div className="w-1/3 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=200')]" />
             <div className="w-2/3 p-6 flex flex-col justify-center">
                <div className="label-tag mb-2 bg-white text-rugby-blue">Player Spotlight</div>
                <h4 className="text-2xl font-black italic leading-tight mb-2 uppercase">Jordan Smith</h4>
                <p className="text-xs text-zinc-400 mb-4">Hamiltons match-winner shares his journey and vision for the season.</p>
                <div className="flex gap-3">
                   <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-xs hover:bg-rugby-blue transition-colors cursor-pointer">▶</div>
                   <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-xs hover:bg-rugby-blue transition-colors cursor-pointer">💬</div>
                </div>
             </div>
          </div>

          {/* Store Teaser */}
          <div className="bento-card col-span-12 md:col-span-4 row-span-2 bg-rugby-blue/10 border-rugby-blue/20 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-rugby-blue">Rush Store</h3>
                <span className="text-[10px] text-zinc-500">NEW DROP</span>
              </div>
              <div className="flex gap-4 items-center mb-6">
                <div className="w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-lg transform rotate-6 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" />
                </div>
                <div>
                    <div className="text-sm font-bold uppercase text-white">Classic Club Pack</div>
                    <div className="text-[10px] text-zinc-500 mb-2">Exclusive Presets</div>
                    <div className="text-xl font-black text-white">R 249.00</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                onClick={() => addToCart(featuredProduct)}
                className="w-full bg-rugby-blue text-white font-black uppercase text-[10px] rounded-none py-4 hover:bg-rugby-blue/80"
              >
                Add to Bag
              </Button>
              <Link to="/store" className="w-full">
                <Button className="w-full bg-white/5 border border-white/10 text-[10px] font-black uppercase hover:bg-white hover:text-rugby-blue transition-all rounded-none py-4">
                  Shop All Items
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Community / Facebook Integration Mockup */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 py-16 border-t border-white/10">
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl mb-4">JOIN THE COMMUNITY</h2>
            <div className="flex justify-center gap-4">
               <Button 
                className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90 rounded-full px-6"
                nativeButton={false}
                render={<a href={facebookUrl} target="_blank" rel="noopener noreferrer" />}
               >
                 FACEBOOK COMMUNITY
               </Button>
               <Button className="bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-full px-6">
                 WHATSAPP UPDATES
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
