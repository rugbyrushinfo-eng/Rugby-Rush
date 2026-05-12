
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
    venue: 'Constantia Sports Ground',
    league: 'Super League A',
    status: 'Upcoming'
  },
  {
    id: 'f2',
    homeTeam: 'Maties',
    awayTeam: 'Hamiltons',
    homeLogo: 'MT',
    awayLogo: 'HM',
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
  },
  {
    id: 'f4',
    homeTeam: 'Villager',
    awayTeam: 'SK Walmers',
    homeLogo: 'VL',
    awayLogo: 'SK',
    date: '2026-05-17',
    time: '15:30',
    venue: 'Brookside',
    league: 'Super League A',
    status: 'Upcoming'
  }
];

export const standings: LeagueTable[] = [
  {
    league: 'Super League A',
    standings: [
      { rank: 1, team: 'Maties', played: 8, won: 8, drawn: 0, lost: 0, points: 40, diff: 210 },
      { rank: 2, team: 'False Bay', played: 8, won: 7, drawn: 0, lost: 1, points: 34, diff: 145 },
      { rank: 3, team: 'Durbell', played: 8, won: 6, drawn: 0, lost: 2, points: 29, diff: 98 },
      { rank: 4, team: 'Hamiltons', played: 8, won: 5, drawn: 0, lost: 3, points: 26, diff: 45 },
      { rank: 5, team: 'Tygerberg', played: 8, won: 4, drawn: 1, lost: 3, points: 23, diff: 12 },
      { rank: 6, team: 'Villager', played: 8, won: 4, drawn: 0, lost: 4, points: 21, diff: -5 },
      { rank: 7, team: 'Brackenfell', played: 8, won: 3, drawn: 1, lost: 4, points: 18, diff: -12 },
      { rank: 8, team: 'Uni-Mil', played: 8, won: 3, drawn: 0, lost: 5, points: 15, diff: -30 },
      { rank: 9, team: 'SK Walmers', played: 8, won: 2, drawn: 1, lost: 5, points: 12, diff: -65 },
      { rank: 10, team: 'NTK', played: 8, won: 2, drawn: 0, lost: 6, points: 10, diff: -80 },
      { rank: 11, team: 'Helderberg', played: 8, won: 1, drawn: 1, lost: 6, points: 8, diff: -110 },
      { rank: 12, team: 'Kuilsriver', played: 8, won: 1, drawn: 0, lost: 7, points: 6, diff: -140 }
    ]
  },
  {
    league: 'Super League B',
    standings: [
      { rank: 1, team: 'Bellville', played: 8, won: 7, drawn: 1, lost: 0, points: 36, diff: 180 },
      { rank: 2, team: 'Hands & Heart', played: 8, won: 7, drawn: 0, lost: 1, points: 33, diff: 120 },
      { rank: 3, team: 'Kraaifontein', played: 8, won: 6, drawn: 0, lost: 2, points: 28, diff: 85 },
      { rank: 4, team: 'Franschhoek', played: 8, won: 5, drawn: 1, lost: 2, points: 27, diff: 45 },
      { rank: 5, team: 'Goodwood', played: 8, won: 5, drawn: 0, lost: 3, points: 24, diff: 20 },
      { rank: 6, team: 'Collegians', played: 8, won: 4, drawn: 0, lost: 4, points: 20, diff: -10 },
      { rank: 7, team: 'Vineyards', played: 8, won: 3, drawn: 1, lost: 4, points: 17, diff: -25 },
      { rank: 8, team: 'Rangers', played: 8, won: 3, drawn: 0, lost: 5, points: 14, diff: -50 },
      { rank: 9, team: 'Pniel Villagers', played: 8, won: 2, drawn: 1, lost: 5, points: 12, diff: -70 },
      { rank: 10, team: 'Young Peoples', played: 8, won: 2, drawn: 0, lost: 6, points: 10, diff: -90 },
      { rank: 11, team: 'Belhar', played: 8, won: 1, drawn: 0, lost: 7, points: 6, diff: -120 },
      { rank: 12, team: 'Busy Bees', played: 8, won: 0, drawn: 1, lost: 7, points: 2, diff: -160 }
    ]
  },
  {
    league: 'Super League C',
    standings: [
      { rank: 1, team: 'All Saints', played: 8, won: 8, drawn: 0, lost: 0, points: 40, diff: 200 },
      { rank: 2, team: 'Elsies River', played: 8, won: 6, drawn: 1, lost: 1, points: 30, diff: 110 },
      { rank: 3, team: 'Eersterivier', played: 8, won: 6, drawn: 0, lost: 2, points: 28, diff: 90 },
      { rank: 4, team: 'Kylemore', played: 8, won: 5, drawn: 1, lost: 2, points: 26, diff: 50 },
      { rank: 5, team: 'Langa', played: 8, won: 5, drawn: 0, lost: 3, points: 23, diff: 10 },
      { rank: 6, team: 'Masiphumelele', played: 8, won: 4, drawn: 0, lost: 4, points: 18, diff: -5 },
      { rank: 7, team: 'Blue Jets', played: 8, won: 3, drawn: 1, lost: 4, points: 16, diff: -20 },
      { rank: 8, team: 'Whistling Wheels', played: 8, won: 3, drawn: 0, lost: 5, points: 14, diff: -45 },
      { rank: 9, team: 'Primrose', played: 8, won: 2, drawn: 1, lost: 5, points: 11, diff: -75 },
      { rank: 10, team: 'Strand', played: 8, won: 2, drawn: 0, lost: 6, points: 9, diff: -95 },
      { rank: 11, team: 'Sir Lowrians', played: 8, won: 1, drawn: 0, lost: 7, points: 5, diff: -130 },
      { rank: 12, team: 'Faure', played: 8, won: 0, drawn: 1, lost: 7, points: 2, diff: -180 }
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
