import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { CartContext } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

function Cart({ onCheckout }) {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    const handleUpdateQuantity = (itemId, currentQuantity, delta) => {
        const newQuantity = Math.max(1, currentQuantity + delta);
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
    };

    const handleRemoveItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    const handleClearCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        if (onCheckout) onCheckout();
        navigate('/checkout');
    };

    return(
        <div className="max-w-md mx-auto p-4 sm:p-6 animate-in fade-in duration-300">
            <Card className="border border-zinc-200 shadow-sm rounded-xl overflow-hidden bg-white">
                <CardHeader className="bg-zinc-50/50 border-b border-zinc-100 pb-4">
                <CardTitle className="flex justify-between items-center text-zinc-900 font-bold text-lg">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-emerald-600" />
                        <span>Shopping Cart</span>
                    </div>
                    
                    <span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">
                        {cart.length} {cart.length === 1 ? 'item' : 'items'}
                    </span>
                </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {cart.length === 0 ? (
                        <div className="text-center py-12 space-y-3">
                            <div className="mx-auto h-10 w-10 bg-zinc-50 border border-zinc-200 text-zinc-400 rounded-full flex items-center justify-center">
                                <ShoppingBag className="h-5 w-5" />
                            </div>
                            
                            <p className="text-zinc-500 font-medium text-sm">Your basket is completely empty.</p>
                        </div>
                        
                    ) : (
                    
                    <div className="divide-y divide-zinc-100">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
                                <div className="min-w-0 flex-1">
                                    <p className="font-bold text-sm text-zinc-800 truncate uppercase tracking-tight">{item.name}</p>
                                    <p className="text-xs text-zinc-400 font-medium mt-0.5">
                                        Ksh. {item.price.toLocaleString()} each
                                    </p>
                                </div>
                                
                                <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50 overflow-hidden h-8 shrink-0">
                                    
                                    <button
                                    type="button"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity || 1, -1)}
                                    className="px-2 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
                                    >
                                        <Minus className="h-3 w-3" />
                                    </button>
                                    
                                    <span className="px-2 text-xs font-bold text-zinc-700 w-8 text-center select-none">
                                        {item.quantity || 1}
                                    </span>
                                    
                                    <button
                                    type="button"
                                    onClick={() => handleUpdateQuantity(item.id, item.quantity || 1, 1)}
                                    className="px-2 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
                                    >
                                        <Plus className="h-3 w-3" />
                                    </button>
                                </div>
                                
                                <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-zinc-400 hover:text-red-600 hover:bg-red-50 shrink-0 transition-colors rounded-lg"
                                onClick={() => handleRemoveItem(item.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                    
                            </div>
                        ))}
                    </div>
                    )}
                </CardContent>
                
                {cart.length > 0 && (
                    <CardFooter className="flex-col gap-4 border-t border-zinc-100 pt-4 bg-zinc-50/30">
                        <div className="flex justify-between w-full font-bold text-base text-zinc-800">
                            <span>Order Total</span>
                            <span className="text-emerald-700 font-black">Ksh. {totalPrice.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex gap-3 w-full">
                            <Button 
                            variant="outline" 
                            className="flex-1 text-xs border-zinc-200 text-zinc-500 hover:bg-zinc-50 font-bold h-10 rounded-lg transition-colors" 
                            onClick={handleClearCart}
                            >
                                Clear All
                            </Button>
                            
                            <Button 
                            className="flex-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-600/10 group" 
                            onClick={handleCheckout}
                            >
                                <span>Proceed</span>
                                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </CardFooter>
                )}
            </Card>
        </div>
    )
}