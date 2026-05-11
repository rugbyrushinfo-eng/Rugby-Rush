
export interface NewsItem {
  id: string;
  title: string;
  category: 'Breaking News' | 'Match Report' | 'Opinion' | 'Transfer' | 'Feature';
  summary: string;
  image: string;
  author: string;
  date: string;
  content: string;
}

export interface Fixture {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  time: string;
  venue: string;
  league: string;
  status: 'Upcoming' | 'Live' | 'Finished';
  homeScore?: number;
  awayScore?: number;
}

export interface LeagueTable {
  league: string;
  standings: {
    rank: number;
    team: string;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    points: number;
    diff: number;
  }[];
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'SLA: Hamiltons Edge Out Villagers in Thriller',
    category: 'Match Report',
    summary: 'A last-minute penalty from Jordan Smith secured a 24-22 victory for Hammies in the Sea Point derby.',
    image: 'https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=1000&auto=format&fit=crop',
    author: 'Rugby Rush Staff',
    date: '2026-05-10',
    content: 'Full report content here...'
  },
  {
    id: '2',
    title: 'The Rise of Club Rugby in Khayelitsha',
    category: 'Feature',
    summary: 'How grassroots initiatives are transforming the landscape of rugby in the township.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    author: 'Sipho Magala',
    date: '2026-05-09',
    content: 'Feature content here...'
  },
  {
    id: '3',
    title: 'Rumour Mill: Western Province Star Heading to SLA?',
    category: 'Transfer',
    summary: 'Rumours are swirling that a contracted WP player might be turning out for a certain Southern Suburbs club.',
    image: 'https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=1000&auto=format&fit=crop',
    author: 'Rugby Rush Staff',
    date: '2026-05-08',
    content: 'Transfer news content here...'
  }
];

export const fixtures: Fixture[] = [
  {
    id: 'f1',
    homeTeam: 'False Bay',
    awayTeam: 'Durbell',
    homeLogo: 'FB',
    awayLogo: 'DB',
    date: '2026-05-15',
    time: '15:30',
    venue: 'Philip Herbstein',
    league: 'Super League A',
    status: 'Upcoming'
  },
  {
    id: 'f2',
    homeTeam: 'Maties',
    awayTeam: 'UCT Ikey Tigers',
    homeLogo: 'MT',
    awayLogo: 'IK',
    date: '2026-05-15',
    time: '19:00',
    venue: 'Danie Craven Stadium',
    league: 'Super League A',
    status: 'Upcoming'
  },
  {
    id: 'f3',
    homeTeam: 'Tygerberg',
    awayTeam: 'Uni-Mil',
    homeLogo: 'TB',
    awayLogo: 'UM',
    date: '2026-05-10',
    time: '15:00',
    venue: 'Florida Park',
    league: 'Super League A',
    status: 'Finished',
    homeScore: 31,
    awayScore: 28
  }
];

export const standings: LeagueTable[] = [
  // ... existing standings
  {
    league: 'Super League A',
    standings: [
      { rank: 1, team: 'Maties', played: 5, won: 5, drawn: 0, lost: 0, points: 25, diff: 120 },
      { rank: 2, team: 'False Bay', played: 5, won: 4, drawn: 0, lost: 1, points: 20, diff: 85 },
      { rank: 3, team: 'Durbell', played: 5, won: 3, drawn: 1, lost: 1, points: 17, diff: 45 },
      { rank: 4, team: 'Hamiltons', played: 5, won: 3, drawn: 0, lost: 2, points: 15, diff: 12 },
      { rank: 5, team: 'Villagers', played: 5, won: 2, drawn: 1, lost: 2, points: 12, diff: -5 }
    ]
  }
];

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'Apparel' | 'Digital' | 'Equipment';
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Rugby Rush "Clubhouse" Hoodie',
    price: 'R650.00',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Standard SLA 2026 Poster (Digital)',
    price: 'R45.00',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Rugby Rush Media Pack',
    price: 'R150.00',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop'
  }
];
