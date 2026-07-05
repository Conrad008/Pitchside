import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const testimonialsData = [
  { id: 1, name: 'Brian O.', role: 'Winger', text: 'The delivery to Kilimani was incredibly fast. The Vapor Elite boots feel absolute class on the pitch.' },
  { id: 2, name: 'Kevin M.', role: 'Midfielder', text: 'Stunning quality on the authentic home jersey. Best place in Nairobi to secure genuine football gear.' },
];

export const Home = () => {
    const [cartCount] = useState(0);

    return (
        <div className='min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased'>
            <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                    <span className="text-xl font-black uppercase tracking-wider">
                        Pitchside<span className="text-emerald-600">.</span>
                    </span>
                    
                    <Button variant="ghost" className="relative p-2 text-zinc-700 rounded-full hover:bg-zinc-100">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </Button>
                </div>
            </header>

            <main className='mx-auto max-w-5xl px-4 py-12 space-y-16'>
                <section className="text-center max-w-2xl mx-auto space-y-4">
                    <h1 className="text-4xl font-black tracking-tight text-zinc-900 uppercase sm:text-5xl">
                        Welcome to <span className="text-emerald-600">Pitchside</span>
                    </h1>
                    
                    <p className="text-zinc-500 text-base leading-relaxed">
                        Your premium locker room for authentic team kits and pro-tier football boots
                        equipment. Built for players who demand absolute speed.
                    </p>
                </section>

                <section className="space-y-6">
                    <div className="border-b border-zinc-200 pb-4">
                        <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                            Player Reviews
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {testimonialsData.map((t) => (
                            <div key={t.id} className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm space-y-3">
                                <p className="text-zinc-600 text-sm italic leading-relaxed">
                                    "{t.text}"
                                </p>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-zinc-900">{t.name}</h4>
                                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    )
}