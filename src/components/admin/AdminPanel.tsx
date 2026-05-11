import { useState } from 'react';
import { useApp, NavLink } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Plus, 
  Trash2, 
  Save, 
  Facebook,
  ExternalLink,
  ChevronUp,
  LayoutDashboard
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export function AdminPanel() {
  const { navLinks, setNavLinks, facebookUrl, setFacebookUrl } = useApp();
  const [tempLinks, setTempLinks] = useState<NavLink[]>(navLinks);
  const [tempFb, setTempFb] = useState(facebookUrl);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddLink = () => {
    setTempLinks([...tempLinks, { name: 'New Link', href: '/' }]);
  };

  const handleRemoveLink = (index: number) => {
    setTempLinks(tempLinks.filter((_, i) => i !== index));
  };

  const handleUpdateLink = (index: number, field: keyof NavLink, value: string) => {
    const next = [...tempLinks];
    next[index] = { ...next[index], [field]: value };
    setTempLinks(next);
  };

  const handleSave = () => {
    setNavLinks(tempLinks);
    setFacebookUrl(tempFb);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] w-fit -translate-x-1/2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger
          render={
            <Button 
              className="rounded-full bg-rugby-gold text-black shadow-2xl hover:scale-105 transition-transform font-bold px-6 py-6 group border-2 border-white/20"
            />
          }
        >
          <div className="flex items-center">
            <Settings className="mr-2 h-5 w-5 animate-spin-slow group-hover:rotate-90 transition-transform" />
            ADMIN CONTROL
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-2xl bg-rugby-black border-white/10 text-white p-0 overflow-hidden">
          <div className="flex h-[600px] flex-col">
            <div className="p-6 border-b border-white/5">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display uppercase tracking-widest text-rugby-gold flex items-center gap-2">
                  <LayoutDashboard className="h-6 w-6" />
                  Rugby Rush Portal
                </DialogTitle>
                <p className="text-zinc-400 text-xs">Update site structure and social integrations.</p>
              </DialogHeader>
            </div>

            <ScrollArea className="flex-grow p-6">
              <div className="space-y-8">
                {/* Navigation Links */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/60">Navigation Bar</h3>
                    <Button variant="outline" size="sm" onClick={handleAddLink} className="h-8 border-rugby-green text-rugby-green hover:bg-rugby-green hover:text-white rounded-full">
                      <Plus className="mr-1 h-3 w-3" /> ADD LINK
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {tempLinks.map((link, index) => (
                      <div key={index} className="flex gap-2 items-center bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="grid flex-grow grid-cols-2 gap-2">
                          <Input 
                            value={link.name} 
                            onChange={(e) => handleUpdateLink(index, 'name', e.target.value)}
                            placeholder="Label (e.g. News)"
                            className="bg-black/50 border-white/10 text-xs"
                          />
                          <Input 
                            value={link.href} 
                            onChange={(e) => handleUpdateLink(index, 'href', e.target.value)}
                            placeholder="Path (e.g. /news)"
                            className="bg-black/50 border-white/10 text-xs"
                          />
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveLink(index)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-white/5" />

                {/* Social Settings */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">Social Connect</h3>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Facebook className="h-4 w-4 text-[#1877F2]" />
                      <span className="text-xs font-medium">Facebook Page URL</span>
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        value={tempFb} 
                        onChange={(e) => setTempFb(e.target.value)}
                        placeholder="https://facebook.com/..."
                        className="bg-black/50 border-white/10 text-xs"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        nativeButton={false}
                        render={<a href={tempFb} target="_blank" rel="noopener noreferrer" />}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                 <Separator className="bg-white/5" />
                 
                 <div className="p-4 bg-rugby-gold/5 border border-rugby-gold/20 rounded-lg">
                    <h3 className="text-xs font-bold uppercase text-rugby-gold mb-2">Pro Tip</h3>
                    <p className="text-[10px] text-zinc-400 leading-relaxed italic">
                      Changes made here persist in your local browser session. Connect to a database (Firestore) to make these changes permanent for all users.
                    </p>
                 </div>
              </div>
            </ScrollArea>

            <div className="p-6 border-t border-white/5 flex justify-end gap-3 bg-black/20">
              <Button variant="ghost" onClick={() => setIsOpen(false)} className="rounded-none px-6">CANCEL</Button>
              <Button onClick={handleSave} className="bg-rugby-gold text-black font-black uppercase px-8 rounded-none group">
                <Save className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                SAVE CHANGES
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
