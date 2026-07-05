import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';

const testimonialsData = [
  { id: 1, name: 'Brian O.', role: 'Winger', text: 'The delivery to Kilimani was incredibly fast. The Vapor Elite boots feel absolute class on the pitch.' },
  { id: 2, name: 'Kevin M.', role: 'Midfielder', text: 'Stunning quality on the authentic home jersey. Best place in Nairobi to secure genuine football gear.' },
];

export const Home = () => {
    const [cartCount, setCartCount] = useState(0);

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
        </div>
    )
}