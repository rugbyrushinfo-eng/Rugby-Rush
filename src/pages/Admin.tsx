import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Newspaper, 
  Calendar, 
  Trophy, 
  BarChart3, 
  Megaphone, 
  Users, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  Search,
  Bell,
  MoreVertical,
  TrendingUp,
  Eye,
  Share2,
  Lock,
  ArrowRight,
  TrendingDown,
  Video,
  Smile,
  Globe,
  Settings2,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldAlert,
  Flame,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'motion/react';

const ADMIN_KEY = 'crcL@22';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Management State
  const [fixtures, setFixtures] = useState([
    { id: 1, home: "Durbell RFC", away: "Maties", date: "2024-05-15", time: "15:00", venue: "Durbell Park", status: "Upcoming" },
    { id: 2, home: "Brackenfell", away: "Hamiltons", date: "2024-05-15", time: "16:30", venue: "The Quarry", status: "Upcoming" },
  ]);

  const [logs, setLogs] = useState([
    { pos: 1, team: "Durbell RFC", p: 12, w: 10, d: 0, l: 2, pts: 48 },
    { pos: 2, team: "Maties", p: 12, w: 9, d: 1, l: 2, pts: 44 },
    { pos: 3, team: "Hamiltons", p: 12, w: 7, d: 0, l: 5, pts: 32 },
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsUploading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === ADMIN_KEY) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('System Access Denied: Invalid Key');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Stadium Atmosphere Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544644065-ef7578f773a4?q=80&w=1600')] bg-cover bg-center grayscale opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-red-950/30" />
          {/* Subtle Flash Lights */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full" 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="text-center mb-8">
            <div className="bg-red-600 inline-block px-5 py-2 font-display italic text-5xl tracking-tighter transform -skew-x-12 text-white mb-6 shadow-[0_0_40px_rgba(220,38,38,0.3)]">
              RUGBY RUSH
            </div>
            <h1 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Admin Access Panel</h1>
            <div className="h-0.5 w-12 bg-red-600 mx-auto mt-4" />
          </div>

          <Card className="bg-zinc-900/40 border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
            <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 animate-pulse" />
            <CardContent className="p-10">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Authentication Key</label>
                    <ShieldAlert className="h-3 w-3 text-red-500" />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20 group-focus-within:text-red-500 transition-colors" />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-black/40 border-white/10 pl-12 h-16 font-mono text-xl tracking-[0.5em] focus:border-red-600 focus:ring-0 transition-all text-white placeholder:text-white/5"
                      value={passkey}
                      onChange={(e) => setPasskey(e.target.value)}
                    />
                  </div>
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-[10px] font-bold uppercase mt-2 pl-1"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full h-16 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-all group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center">
                    Enter Media Room
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="mt-10 text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-medium">
            Authorized Personnel Only • Media Encryption Active
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050607] text-white flex flex-col md:flex-row antialiased">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-[#08090a] border-r border-white/5 flex flex-col sticky top-0 h-screen overflow-y-auto z-40">
        <div className="p-8 border-b border-white/5 flex flex-col gap-1">
          <div className="flex items-center gap-3">
             <div className="bg-red-600 h-9 w-9 transform -skew-x-12 flex items-center justify-center font-display text-white text-xl font-black italic shadow-lg shadow-red-600/20">R</div>
             <span className="font-display italic text-2xl tracking-tighter font-black">RUGBY RUSH</span>
          </div>
          <span className="text-[10px] text-red-500 font-black uppercase tracking-[0.3em] ml-12">Control Center</span>
        </div>

        <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto no-scrollbar">
          <section>
             <h3 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 pl-4">Core Media</h3>
             <nav className="flex flex-col gap-1">
                {[
                  { id: 'overview', icon: LayoutDashboard, label: 'Dashboard' },
                  { id: 'news', icon: Newspaper, label: 'Latest News' },
                  { id: 'fixtures', icon: Calendar, label: 'Fixtures' },
                  { id: 'results', icon: Trophy, label: 'Results' },
                  { id: 'logs', icon: BarChart3, label: 'League Logs' },
                  { id: 'announcements', icon: Megaphone, label: 'Announcements' },
                ].map((item) => (
                  <NavBtn key={item.id} active={activeTab === item.id} item={item} onClick={() => setActiveTab(item.id)} />
                ))}
             </nav>
          </section>

          <section>
             <h3 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 pl-4">Digital Media</h3>
             <nav className="flex flex-col gap-1">
                {[
                  { id: 'players', icon: Users, label: 'Player Features' },
                  { id: 'viral', icon: Flame, label: 'Memes & Viral' },
                  { id: 'community', icon: Globe, label: 'Community' },
                  { id: 'media', icon: ImageIcon, label: 'Media Gallery' },
                  { id: 'videos', icon: Video, label: 'Podcast & Videos' },
                ].map((item) => (
                  <NavBtn key={item.id} active={activeTab === item.id} item={item} onClick={() => setActiveTab(item.id)} />
                ))}
             </nav>
          </section>

          <section>
             <h3 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 pl-4">Operations</h3>
             <nav className="flex flex-col gap-1">
                {[
                  { id: 'moderation', icon: MessageSquare, label: 'Comments' },
                  { id: 'messages', icon: Bell, label: 'User Messages' },
                  { id: 'sponsors', icon: Share2, label: 'Sponsors & Ads' },
                  { id: 'settings', icon: Settings2, label: 'Settings' }
                ].map((item) => (
                  <NavBtn key={item.id} active={activeTab === item.id} item={item} onClick={() => setActiveTab(item.id)} />
                ))}
             </nav>
          </section>
        </div>

        <div className="p-6 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 mb-6 p-2 rounded-lg bg-white/5 border border-white/5">
             <div className="h-9 w-9 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center font-black text-red-500">RR</div>
             <div>
                <div className="text-xs font-black uppercase tracking-widest">Admin Team</div>
                <div className="text-[9px] text-white/40 uppercase">Root Access</div>
             </div>
          </div>
          <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="w-full justify-start text-white/20 hover:text-red-500 hover:bg-red-500/10 gap-3 text-xs font-black uppercase tracking-widest px-4">
            <LogOut className="h-4 w-4" />
            Terminate Session
          </Button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#050607]">
        {/* Modern Ticker / Stats Bar */}
        <header className="h-20 border-b border-white/5 bg-black/60 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-30 shadow-2xl">
           <div className="flex items-center gap-8 flex-1">
              <div className="flex items-center gap-2 overflow-hidden max-w-[400px]">
                 <Badge className="bg-red-600 text-white animate-pulse shrink-0">LATEST</Badge>
                 <div className="text-[10px] font-black uppercase tracking-widest text-white/60 whitespace-nowrap">
                   Durbell vs Maties: Ticket sales up 40% • Breaking News: SLA Semis dates confirmed
                 </div>
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-6 pr-8 border-r border-white/5">
                 <StatItem label="Views" value="1.2M" />
                 <StatItem label="Posts" value="842" />
                 <StatItem label="Health" value="100%" color="text-green-500" />
              </div>

              <div className="flex items-center gap-4">
                 <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors relative">
                    <Bell className="h-5 w-5 text-white/60" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-600 rounded-full border-2 border-black" />
                 </button>
                 <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-red-600/30">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="p-10 space-y-10">
          <Tabs value={activeTab} className="w-full">
            <TabsContent value="overview" className="mt-0 space-y-10 group">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">Editor's Dashboard</h2>
                    <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                       <Clock className="h-3 w-3" /> System Synchronized: May 12, 2026
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-white/10 text-white font-black uppercase tracking-widest py-6 px-8 rounded-none flex items-center gap-3">
                       <Search className="h-4 w-4" /> Global Search
                    </Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-6 px-10 rounded-none shadow-xl shadow-red-600/10">
                       <Plus className="mr-3 h-5 w-5" /> Quick Post
                    </Button>
                  </div>
               </div>

               {/* Bento Dashboard Widgets */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <WidgetCard label="Total Reach" value="482.4K" icon={TrendingUp} trend="+24.5%" trendType="up" />
                  <WidgetCard label="Media Assets" value="2.1K" icon={ImageIcon} trend="Stable" trendType="neutral" />
                  <WidgetCard label="Ad Revenue" value="R 14,820" icon={Share2} trend="+12%" trendType="up" />
                  <WidgetCard label="Community" value="342" icon={Users} trend="-4%" trendType="down" />
               </div>

               <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Performance Chart Placeholder */}
                  <Card className="xl:col-span-2 bg-[#0a0c0e] border-white/5 rounded-none p-0 overflow-hidden">
                     <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                        <div>
                           <CardTitle className="text-xs font-black uppercase tracking-[0.3em] text-white">Audience Growth</CardTitle>
                           <p className="text-[10px] text-zinc-500 uppercase mt-1">Real-time engagement tracker</p>
                        </div>
                        <div className="flex gap-2">
                           {['24H', '7D', '1M', '1Y'].map(t => (
                             <button key={t} className={`text-[10px] font-black px-3 py-1 rounded transition-colors ${t === '7D' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-white'}`}>{t}</button>
                           ))}
                        </div>
                     </CardHeader>
                     <CardContent className="h-[400px] flex items-center justify-center relative">
                        <div className="absolute inset-0 opacity-5">
                           <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                        </div>
                        <div className="flex flex-col items-center opacity-30">
                           <BarChart3 className="h-16 w-16 mb-4 text-red-600" />
                           <span className="text-[10px] font-black uppercase tracking-[0.5em]">Analytics Engine Active</span>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Sidebar Widgets */}
                  <div className="space-y-8">
                     <Card className="bg-[#0a0c0e] border-white/5 rounded-none">
                        <CardHeader className="p-6 border-b border-white/5">
                           <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em]">Breaking Editor</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                           <div className="space-y-2">
                              <label className="text-[9px] font-black uppercase text-zinc-600">Headline</label>
                              <Input className="bg-black border-white/10 rounded-none h-12 text-sm" placeholder="e.g. BREAKING: Final Tickets Released" />
                           </div>
                           <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase rounded-none tracking-widest text-[10px] h-12">
                              Update News Banner
                           </Button>
                        </CardContent>
                     </Card>

                     <Card className="bg-[#0a0c0e] border-white/5 rounded-none">
                        <CardHeader className="p-6 border-b border-white/5">
                           <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em]">Recent Submissions</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <div className="divide-y divide-white/5">
                              {[
                                { user: 'Jordan S.', type: 'Image', name: 'Final_Whistle.jpg', time: '2m' },
                                { user: 'Mike R.', type: 'Meme', name: 'Scrum_Life.png', time: '14m' },
                                { user: 'Sarah W.', type: 'Story', name: 'Club_Revival.docx', time: '1h' },
                              ].map((sub, i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                                   <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-red-500">{sub.type[0]}</div>
                                      <div>
                                         <div className="text-[10px] font-black uppercase">{sub.name}</div>
                                         <div className="text-[9px] text-zinc-600">{sub.user} • {sub.time} ago</div>
                                      </div>
                                   </div>
                                   <CheckCircle2 className="h-4 w-4 text-zinc-800" />
                                </div>
                              ))}
                           </div>
                           <div className="p-4 border-t border-white/5 text-center">
                              <button className="text-[9px] font-black text-red-500 uppercase tracking-widest hover:underline">View All Submissions</button>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="news" className="mt-0">
               <div className="bg-[#0a0c0e] border border-white/5 p-10 min-h-[800px] flex flex-col">
                  <div className="w-full max-w-5xl mx-auto space-y-10">
                     <div className="flex justify-between items-end">
                        <div className="space-y-4">
                           <h2 className="text-5xl font-black italic uppercase tracking-tighter">Media Studio</h2>
                           <div className="flex gap-2">
                             <Badge className="bg-red-600">LIVE EDITOR</Badge>
                             <Badge variant="outline" className="text-zinc-500 border-zinc-500">AUTO-SAVE ENABLED</Badge>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <Button variant="outline" className="border-white/10 rounded-none uppercase font-black tracking-widest text-[10px] px-8 h-14 hover:bg-white/5">SAVE DRAFT</Button>
                           <Button className="bg-red-600 rounded-none uppercase font-black tracking-widest text-[10px] px-10 h-14 shadow-2xl shadow-red-600/20">PUBLISH STORY</Button>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-8">
                           <div className="space-y-4">
                              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Article Headline</label>
                              <Input className="bg-transparent border-b-2 border-white/10 focus:border-red-600 h-24 text-6xl font-black italic uppercase tracking-tighter placeholder:text-white/5 rounded-none p-0 outline-none" placeholder="ARTICLE TITLE" />
                           </div>
                           
                           <div className="space-y-4">
                              <div className="flex bg-white/5 border border-white/10 p-2 gap-2">
                                 {['B', 'I', 'U', 'Link', 'H1', 'List'].map(tool => (
                                   <button key={tool} className="h-8 w-8 flex items-center justify-center text-[10px] font-black uppercase hover:bg-white/10">{tool}</button>
                                 ))}
                              </div>
                              <textarea 
                                className="w-full h-96 bg-black/40 border border-white/5 p-8 text-lg font-sans leading-relaxed focus:border-red-600 outline-none resize-none"
                                placeholder="Start writing the story..."
                              />
                           </div>
                        </div>

                        <div className="space-y-8 bg-black/20 p-8 border border-white/5">
                           <div className="space-y-4">
                              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Featured Image</label>
                              <div 
                                onClick={simulateUpload}
                                className="aspect-video bg-black border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-red-600/40 transition-colors group"
                              >
                                {isUploading ? (
                                  <div className="w-48 space-y-2">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-center">{uploadProgress}%</div>
                                    <div className="h-1 bg-white/10 overflow-hidden">
                                       <motion.div initial={{width:0}} animate={{width:`${uploadProgress}%`}} className="h-full bg-red-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <Plus className="h-8 w-8 text-zinc-700 group-hover:text-red-500 transition-colors" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700 group-hover:text-white">Upload Header</span>
                                  </>
                                )}
                              </div>
                           </div>

                           <div className="space-y-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase text-zinc-600">Category Tags</label>
                                 <div className="flex flex-wrap gap-2">
                                    {['SLA', 'Club Rugby', 'Match Report', 'Western Province'].map(tag => (
                                      <Badge key={tag} variant="outline" className="border-white/10 text-[9px] uppercase cursor-pointer hover:bg-red-600 hover:border-red-600 transition-colors">{tag}</Badge>
                                    ))}
                                    <button className="text-[9px] font-black text-red-500 uppercase">+ ADD</button>
                                 </div>
                              </div>

                              <Separator className="bg-white/5" />

                              <div className="space-y-4">
                                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">SEO Settings</h4>
                                 <Input className="bg-black border-white/10 rounded-none text-[10px] h-10" placeholder="Focus Keywords" />
                                 <textarea className="bg-black border-white/10 rounded-none text-[10px] w-full h-20 p-2" placeholder="Meta Description" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="fixtures" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">Fixtures Manager</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Manage upcoming SLA 2026 Season matches</p>
                     </div>
                     <Button className="bg-white text-black font-black uppercase tracking-widest rounded-none h-14 px-8 hover:bg-red-600 hover:text-white transition-all">
                        <Plus className="mr-3 h-5 w-5" /> Add New Fixture
                     </Button>
                  </div>

                  <Card className="bg-[#0a0c0e] border-white/5 rounded-none overflow-hidden">
                     <div className="grid grid-cols-6 p-6 border-b border-white/5 bg-black/40 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                        <div className="col-span-2">Matchup</div>
                        <div>Date & Time</div>
                        <div>Venue</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                     </div>
                     <div className="divide-y divide-white/5">
                        {fixtures.map((fix) => (
                           <div key={fix.id} className="grid grid-cols-6 p-6 items-center hover:bg-white/5 transition-colors group">
                              <div className="col-span-2 flex items-center gap-6">
                                 <div className="text-sm font-black italic">{fix.home} <span className="text-red-500 mx-2">VS</span> {fix.away}</div>
                              </div>
                              <div className="text-xs font-medium text-zinc-400">
                                 <div>{fix.date}</div>
                                 <div className="text-[10px] font-black text-zinc-600">{fix.time}</div>
                              </div>
                              <div className="text-xs text-zinc-400">{fix.venue}</div>
                              <div>
                                 <Badge className="bg-green-600/10 text-green-500 border-none rounded-none text-[8px] font-black uppercase tracking-widest">{fix.status}</Badge>
                              </div>
                              <div className="flex justify-end gap-2">
                                 <Button variant="ghost" className="h-8 px-4 text-[10px] font-black uppercase text-zinc-500 hover:text-white">Edit</Button>
                                 <Button variant="ghost" className="h-8 w-8 p-0 text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </div>
            </TabsContent>

            <TabsContent value="logs" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">League Standings</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Live log sync with SLA main database</p>
                     </div>
                     <Button variant="outline" className="border-red-600 text-red-600 font-black uppercase tracking-widest rounded-none h-14 px-8 hover:bg-red-600 hover:text-white">
                        RECALCULATE PTS
                     </Button>
                  </div>

                  <Card className="bg-[#0a0c0e] border-white/5 rounded-none overflow-hidden">
                     <div className="grid grid-cols-8 p-6 border-b border-white/5 bg-black/40 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 text-center">
                        <div>Pos</div>
                        <div className="col-span-2 text-left">Team Name</div>
                        <div>Played</div>
                        <div>Win</div>
                        <div>Draw</div>
                        <div>Loss</div>
                        <div className="text-white">Pts</div>
                     </div>
                     <div className="divide-y divide-white/5">
                        {logs.map((row) => (
                           <div key={row.pos} className="grid grid-cols-8 p-6 items-center hover:bg-white/5 transition-colors text-center text-sm font-black">
                              <div className={row.pos === 1 ? 'text-red-600' : 'text-zinc-600'}>#{row.pos}</div>
                              <div className="col-span-2 text-left italic">{row.team}</div>
                              <div className="font-mono text-zinc-500">{row.p}</div>
                              <div className="font-mono text-green-500">{row.w}</div>
                              <div className="font-mono text-zinc-500">{row.d}</div>
                              <div className="font-mono text-red-500">{row.l}</div>
                              <div className="text-xl text-red-600 tracking-tighter">{row.pts}</div>
                           </div>
                        ))}
                     </div>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white/5 p-6 border border-white/10 rounded-none space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Promotion Zone</h4>
                        <div className="text-green-500 text-xs font-black italic uppercase">Top 4 Qualify for Semi-Finals</div>
                     </div>
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="announcements" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">Emergency Broadcast</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Update the site-wide breaking news ticker</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <Card className="bg-[#0a0c0e] border-white/5 rounded-none p-10 space-y-8">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Ticker Message</label>
                           <textarea 
                             className="w-full h-32 bg-black border border-white/10 p-4 text-sm font-bold uppercase tracking-widest outline-none focus:border-yellow-500 transition-colors"
                             defaultValue="TICKETS FOR DURBELL VS MATIES NOW ON SALE • CLUBHOUSE OPENS AT 12:00"
                           />
                        </div>
                        <div className="flex gap-4">
                           <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase tracking-widest rounded-none h-14">
                              Update Live Ticker
                           </Button>
                           <Button variant="outline" className="border-red-600 text-red-600 font-black uppercase tracking-widest rounded-none h-14 px-10">
                              DEACTIVATE
                           </Button>
                        </div>
                     </Card>

                     <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-widest">Preview</h3>
                        <div className="h-20 bg-black border border-white/5 flex items-center px-10 gap-4 overflow-hidden">
                           <Badge className="bg-red-600 text-white animate-pulse">LATEST</Badge>
                           <marquee className="text-[10px] font-black uppercase tracking-widest text-white/50">
                             TICKETS FOR DURBELL VS MATIES NOW ON SALE • CLUBHOUSE OPENS AT 12:00 • 
                           </marquee>
                        </div>
                        <p className="text-[9px] text-zinc-600 uppercase italic">This update will reflect across all platforms in real-time.</p>
                     </div>
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="viral" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">Viral Lab</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Manage memes and social-first content</p>
                     </div>
                     <Button className="bg-red-600 font-black uppercase tracking-widest rounded-none h-14 px-8">
                        <Plus className="mr-3 h-5 w-5" /> New Viral Post
                     </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                     {[
                        { title: 'Scrum Life', views: '45K', status: 'Trending', color: 'bg-green-500' },
                        { title: 'Flyhalf Problems', views: '22K', status: 'Viral', color: 'bg-orange-500' },
                        { title: 'Monday Morning', views: '12K', status: 'Steady', color: 'bg-blue-500' },
                        { title: 'Club Pride', views: '67K', status: 'Top Hook', color: 'bg-red-600' },
                     ].map((item, i) => (
                        <Card key={i} className="bg-[#0a0c0e] border-white/5 rounded-none overflow-hidden group cursor-pointer hover:border-red-600/50 transition-all">
                           <div className="aspect-[4/5] bg-black/40 overflow-hidden relative">
                              <div className={`absolute top-4 left-4 h-2 w-2 rounded-full ${item.color} animate-ping`} />
                              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-40 transition-opacity">
                                 <Smile className="h-20 w-20" />
                              </div>
                           </div>
                           <CardContent className="p-6">
                              <div className="flex justify-between items-center mb-2">
                                 <Badge className="bg-white/5 text-[8px] font-black uppercase border-none">{item.status}</Badge>
                                 <span className="text-[9px] font-black text-zinc-600 flex items-center gap-1"><Eye className="h-3 w-3" /> {item.views}</span>
                              </div>
                              <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="sponsors" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">Sponsor & Ads</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Track performance of South African club partners</p>
                     </div>
                     <Button className="bg-red-600 font-black uppercase tracking-widest rounded-none h-14 px-8">
                        <Plus className="mr-3 h-5 w-5" /> Onboard Partner
                     </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {[
                        { name: 'Castle Lite', reach: '120K', ctr: '4.2%', revenue: 'R 8,500' },
                        { name: 'Gilbert Rugby', reach: '85K', ctr: '8.6%', revenue: 'R 12,000' },
                        { name: 'Vodacom', reach: '240K', ctr: '2.1%', revenue: 'R 15,400' },
                     ].map((partner, i) => (
                        <Card key={i} className="bg-[#0a0c0e] border-white/5 rounded-none overflow-hidden hover:border-red-600/30 transition-all">
                           <CardHeader className="p-8 border-b border-white/5 bg-black/40">
                              <CardTitle className="text-xl font-black uppercase italic text-red-600">{partner.name}</CardTitle>
                           </CardHeader>
                           <CardContent className="p-8 space-y-6">
                              <div className="grid grid-cols-2 gap-6">
                                 <div>
                                    <div className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Total Impressions</div>
                                    <div className="text-xl font-black">{partner.reach}</div>
                                 </div>
                                 <div>
                                    <div className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Click Rate</div>
                                    <div className="text-xl font-black text-green-500">{partner.ctr}</div>
                                 </div>
                              </div>
                              <Separator className="bg-white/5" />
                              <div className="flex justify-between items-end">
                                 <div>
                                    <div className="text-[8px] font-black uppercase text-zinc-600 tracking-widest">Monthly Yield</div>
                                    <div className="text-2xl font-black text-white">{partner.revenue}</div>
                                 </div>
                                 <Button variant="ghost" className="h-8 text-[9px] font-black uppercase text-red-500">Report</Button>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0">
               <div className="space-y-10">
                  <div className="flex justify-between items-end">
                     <div>
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">Community Hub</h2>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Manage fan submissions and club stories</p>
                     </div>
                  </div>

                  <Card className="bg-[#0a0c0e] border-white/5 rounded-none overflow-hidden">
                     <div className="grid grid-cols-5 p-6 border-b border-white/5 bg-black/40 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                        <div className="col-span-2">User Submission</div>
                        <div>Type</div>
                        <div>Time</div>
                        <div className="text-right">Actions</div>
                     </div>
                     <div className="divide-y divide-white/5">
                        {[
                          { user: 'Siviwe M.', title: 'My Club Story', type: 'ARTICLE', time: '2h ago' },
                          { user: 'Kyle D.', title: 'Final Try Video', type: 'VIDEO', time: '4h ago' },
                          { user: 'Bongi W.', title: 'New Boots Pic', type: 'GALLERY', time: '12h ago' },
                        ].map((post, i) => (
                           <div key={i} className="grid grid-cols-5 p-6 items-center hover:bg-white/5 transition-colors">
                              <div className="col-span-2">
                                 <div className="text-sm font-black uppercase">{post.title}</div>
                                 <div className="text-[10px] text-zinc-600">by {post.user}</div>
                              </div>
                              <div>
                                 <Badge variant="outline" className="text-[8px] font-black uppercase border-white/10">{post.type}</Badge>
                              </div>
                              <div className="text-xs text-zinc-500 font-mono">{post.time}</div>
                              <div className="flex justify-end gap-2">
                                 <Button className="h-9 bg-green-600 hover:bg-green-700 text-white text-[9px] font-black uppercase rounded-none">Approve</Button>
                                 <Button variant="ghost" className="h-9 text-red-500 text-[9px] font-black uppercase">Decline</Button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </div>
            </TabsContent>

            <TabsContent value="moderation" className="mt-0">
               <div className="space-y-10">
                  <h2 className="text-5xl font-black italic uppercase tracking-tighter">Moderation Desk</h2>
                  <div className="bg-black/40 border border-white/5 p-10 flex flex-col items-center justify-center min-h-[400px]">
                     <MessageSquare className="h-16 w-16 text-zinc-800 mb-6" />
                     <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-2">No Reports Pending</h3>
                     <p className="text-zinc-600 text-xs italic uppercase tracking-widest">System safe • Community guidelines active</p>
                  </div>
               </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
               <div className="space-y-10">
                  <h2 className="text-5xl font-black italic uppercase tracking-tighter">System Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="bg-[#0a0c0e] border-white/5 rounded-none p-10 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">Navigation Management</h4>
                        <div className="space-y-4">
                           {[
                             'Show Results Tab',
                             'Enable Viral Lab',
                             'Live Score Sync',
                             'Sponsor Rotator'
                           ].map(setting => (
                             <div key={setting} className="flex justify-between items-center p-4 bg-black/40 border border-white/5">
                                <span className="text-[10px] font-black uppercase tracking-widest">{setting}</span>
                                <div className="h-6 w-10 bg-red-600 rounded-full flex items-center justify-end px-1 cursor-pointer">
                                   <div className="h-4 w-4 bg-white rounded-full" />
                                </div>
                             </div>
                           ))}
                        </div>
                     </Card>

                     <Card className="bg-[#0a0c0e] border-white/5 rounded-none p-10 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">Profile & Security</h4>
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[9px] font-black uppercase text-zinc-600">Admin Display Name</label>
                              <Input className="bg-black border-white/10 rounded-none h-12" defaultValue="Rugby Rush Admin" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[9px] font-black uppercase text-zinc-600">System Access Key</label>
                              <Input type="password" className="bg-black border-white/10 rounded-none h-12" defaultValue="crcL@22" />
                           </div>
                           <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase h-14 rounded-none">Save System Config</Button>
                        </div>
                     </Card>
                  </div>
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

interface NavBtnProps {
  item: any;
  active: boolean;
  onClick: () => void;
  key?: string | number; // Added to satisfy potential strict prop checks
}

// Sub-components to keep clean
function NavBtn({ item, active, onClick }: NavBtnProps) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-4 rounded-none text-[11px] font-black uppercase tracking-[0.2em] transition-all group border-l-4 ${
        active 
        ? 'bg-red-600/10 text-white border-red-600 shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]' 
        : 'text-zinc-600 border-transparent hover:text-white hover:bg-white/5'
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon className={`h-4 w-4 transition-colors ${active ? 'text-red-500' : 'group-hover:text-red-500'}`} />
        {item.label}
      </div>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />}
    </button>
  );
}

function StatItem({ label, value, color = "text-white" }: { label: string, value: string, color?: string }) {
  return (
     <div className="text-right">
        <div className="text-[8px] font-black uppercase text-zinc-600 tracking-[0.3em] mb-0.5">{label}</div>
        <div className={`text-sm font-black ${color}`}>{value}</div>
     </div>
  );
}

function WidgetCard({ label, value, icon: Icon, trend, trendType }: { label: string, value: string, icon: any, trend: string, trendType: 'up' | 'down' | 'neutral' }) {
  return (
    <Card className="bg-[#0a0c0e] border-white/5 rounded-none hover:border-red-600/30 transition-all group cursor-default shadow-lg shadow-black/40">
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-red-600/10 rounded-none group-hover:bg-red-600 group-hover:text-white transition-all text-red-500">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-end">
             <div className={`text-[10px] font-black uppercase flex items-center gap-1 ${
               trendType === 'up' ? 'text-green-500' : trendType === 'down' ? 'text-red-500' : 'text-zinc-600'
             }`}>
                {trendType === 'up' && <TrendingUp className="h-3 w-3" />}
                {trendType === 'down' && <TrendingDown className="h-3 w-3" />}
                {trend}
             </div>
             <div className="text-[8px] text-zinc-700 font-bold uppercase mt-1 tracking-widest">vs previous</div>
          </div>
        </div>
        <div className="space-y-1">
           <div className="text-3xl font-black italic tracking-tighter leading-none">{value}</div>
           <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
