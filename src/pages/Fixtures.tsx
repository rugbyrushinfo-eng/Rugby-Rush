
import { fixtures } from '@/data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Fixtures() {
  const upcoming = fixtures.filter(f => f.status === 'Upcoming');
  const finished = fixtures.filter(f => f.status === 'Finished');

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl mb-4">FIXTURES & RESULTS</h1>
        <p className="text-white/60 text-lg">Every match, every score. Follow Cape Town club rugby here.</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full mb-12">
          <TabsTrigger value="upcoming" className="rounded-full px-8 py-2 data-[state=active]:bg-rugby-gold data-[state=active]:text-black">UPCOMING</TabsTrigger>
          <TabsTrigger value="finished" className="rounded-full px-8 py-2 data-[state=active]:bg-rugby-gold data-[state=active]:text-black">RESULTS</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 gap-6">
            {upcoming.map((fixture) => (
              <Card key={fixture.id} className="border-white/5 bg-white/5 group hover:bg-white/10 transition-colors overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-32 bg-rugby-green/20 p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                        <Calendar className="h-5 w-5 text-rugby-gold mb-2" />
                        <span className="text-sm font-bold">{new Date(fixture.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                    </div>
                    <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex-1 flex items-center justify-end gap-6 w-full md:w-auto">
                        <span className="font-display text-2xl md:text-3xl text-right">{fixture.homeTeam}</span>
                        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center font-display text-xl text-rugby-gold border border-rugby-gold/20">
                          {fixture.homeLogo}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-rugby-gold text-black font-display px-4 py-1 text-xl mb-2 italic transform -skew-x-12">VS</div>
                        <div className="flex items-center gap-1 text-xs text-white/40 uppercase tracking-widest">
                          <Clock className="h-3 w-3" /> {fixture.time}
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-start gap-6 w-full md:w-auto">
                         <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center font-display text-xl text-rugby-gold border border-rugby-gold/20">
                          {fixture.awayLogo}
                        </div>
                        <span className="font-display text-2xl md:text-3xl">{fixture.awayTeam}</span>
                      </div>
                    </div>
                    <div className="w-full md:w-64 bg-white/5 p-6 flex flex-col justify-center gap-2 border-t md:border-t-0 md:border-l border-white/5">
                       <Badge variant="outline" className="w-fit border-rugby-gold/30 text-rugby-gold">{fixture.league}</Badge>
                       <div className="flex items-center gap-2 text-sm text-white/60">
                         <MapPin className="h-4 w-4 text-white/40" />
                         {fixture.venue}
                       </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="finished">
           <div className="grid grid-cols-1 gap-6">
            {finished.map((fixture) => (
              <Card key={fixture.id} className="border-white/5 bg-white/5 group hover:bg-white/10 transition-colors overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-32 bg-rugby-black p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 opacity-60">
                        <Trophy className="h-5 w-5 text-rugby-gold mb-2" />
                        <span className="text-xs font-bold uppercase tracking-widest">Final</span>
                    </div>
                    <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex-1 flex items-center justify-end gap-6 w-full md:w-auto">
                        <span className="font-display text-2xl md:text-3xl text-right">{fixture.homeTeam}</span>
                        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center font-display text-xl text-rugby-gold border border-rugby-gold/20">
                          {fixture.homeLogo}
                        </div>
                        <span className="font-display text-4xl md:text-5xl ml-4">{fixture.homeScore}</span>
                      </div>
                      <div className="text-2xl font-display text-white/20">—</div>
                      <div className="flex-1 flex items-center justify-start gap-6 w-full md:w-auto">
                        <span className="font-display text-4xl md:text-5xl mr-4">{fixture.awayScore}</span>
                         <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center font-display text-xl text-rugby-gold border border-rugby-gold/20">
                          {fixture.awayLogo}
                        </div>
                        <span className="font-display text-2xl md:text-3xl">{fixture.awayTeam}</span>
                      </div>
                    </div>
                    <div className="w-full md:w-64 bg-white/5 p-6 flex flex-col justify-center gap-2 border-t md:border-t-0 md:border-l border-white/5">
                       <Badge variant="outline" className="w-fit border-white/20 text-white/60">{fixture.league}</Badge>
                       <div className="text-xs text-white/40 uppercase tracking-widest">{fixture.date} • {fixture.venue}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
