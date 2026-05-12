
import { useState } from 'react';
import { standings } from '@/data/mockData';
import { clubsData } from '@/data/clubsData';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Logs() {
  const [activeLeague, setActiveLeague] = useState('Super League A');
  const currentTable = standings.find(s => s.league === activeLeague) || standings[0];

  const getHomeGround = (teamName: string) => {
    const club = clubsData.find(c => c.name.toLowerCase() === teamName.toLowerCase());
    return club ? club.homeGround : 'Unknown Ground';
  };

  const getMapLink = (teamName: string) => {
    const club = clubsData.find(c => c.name.toLowerCase() === teamName.toLowerCase());
    const query = club ? `${club.homeGround}, ${club.location}, Cape Town` : `${teamName} Rugby Club Cape Town`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
           <Badge className="bg-white text-rugby-blue mb-2 px-3 py-1 font-bold">2026 SEASON</Badge>
           <h1 className="text-5xl md:text-7xl">LEAGUE TABLES</h1>
           <p className="text-white/60 text-lg mt-2">The battle for Cape Town glory. Click a team to see their home ground.</p>
        </div>
        <div className="flex flex-wrap gap-2">
           {standings.map(s => (
             <button
               key={s.league}
               onClick={() => setActiveLeague(s.league)}
               className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                 activeLeague === s.league 
                 ? 'bg-white text-rugby-blue' 
                 : 'bg-white/5 text-white/40 hover:bg-white/10'
               }`}
             >
               {s.league}
             </button>
           ))}
        </div>
      </div>

      <Card className="border-white/5 bg-white/5 overflow-hidden rounded-2xl">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 text-left text-xs text-white/40 uppercase tracking-[0.2em]">
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">TEAM</th>
                  <th className="px-6 py-4">HOME GROUND</th>
                  <th className="px-6 py-4 text-center">PL</th>
                  <th className="px-6 py-4 text-center">W</th>
                  <th className="px-6 py-4 text-center">D</th>
                  <th className="px-6 py-4 text-center">L</th>
                  <th className="px-6 py-4 text-center">DIFF</th>
                  <th className="px-6 py-4 text-center">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentTable.standings.map((team, idx) => (
                  <tr key={team.team} className={`group hover:bg-white/5 transition-colors ${idx < 4 ? 'bg-rugby-blue/10' : ''}`}>
                    <td className="px-6 py-6 font-mono text-white/40 whitespace-nowrap">
                       <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${idx < 4 ? 'bg-white text-rugby-blue font-bold shadow-sm' : ''}`}>
                         {team.rank}
                       </span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <a 
                        href={getMapLink(team.team)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-display text-xl md:text-2xl group-hover:text-white transition-colors flex items-center gap-2"
                      >
                        {team.team.toUpperCase()}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-white" />
                        {getHomeGround(team.team)}
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.played}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.won}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.drawn}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.lost}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">
                       <span className={team.diff > 0 ? 'text-green-500' : 'text-red-500'}>
                         {team.diff > 0 ? '+' : ''}{team.diff}
                       </span>
                    </td>
                    <td className="px-6 py-6 text-center font-display text-3xl text-white whitespace-nowrap font-black">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex items-center gap-4 text-xs text-white/40 italic">
        <div className="h-3 w-3 bg-white rounded-sm" />
        <span>TOP 4 QUALIFY FOR SEMI-FINALS</span>
      </div>
    </div>
  );
}

