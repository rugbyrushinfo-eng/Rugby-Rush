
import { standings } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Logs() {
  const currentTable = standings[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
           <Badge className="bg-rugby-gold text-black mb-2 px-3 py-1 font-bold">2026 SEASON</Badge>
           <h1 className="text-5xl md:text-7xl">LEAGUE TABLES</h1>
           <p className="text-white/60 text-lg mt-2">The battle for Cape Town glory. Track the standings here.</p>
        </div>
        <div className="flex gap-2">
           <Badge variant="outline" className="text-rugby-gold border-rugby-gold">SUPER LEAGUE A</Badge>
           <Badge variant="outline" className="opacity-40">SUPER LEAGUE B</Badge>
           <Badge variant="outline" className="opacity-40">SUPER LEAGUE C</Badge>
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
                  <tr key={team.team} className={`group hover:bg-white/5 transition-colors ${idx < 4 ? 'bg-rugby-green/5' : ''}`}>
                    <td className="px-6 py-6 font-mono text-white/40 whitespace-nowrap">
                       <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${idx < 4 ? 'bg-rugby-gold text-black font-bold' : ''}`}>
                         {team.rank}
                       </span>
                    </td>
                    <td className="px-6 py-6 font-display text-xl md:text-2xl whitespace-nowrap group-hover:text-rugby-gold transition-colors">{team.team.toUpperCase()}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.played}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.won}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.drawn}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">{team.lost}</td>
                    <td className="px-6 py-6 text-center font-mono whitespace-nowrap">
                       <span className={team.diff > 0 ? 'text-green-500' : 'text-red-500'}>
                         {team.diff > 0 ? '+' : ''}{team.diff}
                       </span>
                    </td>
                    <td className="px-6 py-6 text-center font-display text-3xl text-rugby-gold whitespace-nowrap">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex items-center gap-4 text-xs text-white/40 italic">
        <div className="h-3 w-3 bg-rugby-gold rounded-sm" />
        <span>TOP 4 QUALIFY FOR SEMI-FINALS</span>
      </div>
    </div>
  );
}
