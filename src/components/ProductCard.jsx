import { useContext } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CartContext } from '@/context/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({id, name, price, description, category, image}) {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const productPayload = { id, name, price, image, description, category };

        const itemExists = cart.find((item) => item.id === id);
        if (itemExists) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
        );} 
        else {
        setCart([...cart, { ...productPayload, quantity: 1 }]);}
    };

    return (
    <Card className="group overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between rounded-xl dark:bg-zinc-900 dark:text-zinc-50">
        <div className="relative overflow-hidden bg-zinc-100 aspect-square flex items-center justify-center">
            <Link to={`/products/${id}`} className="w-full h-full block">
              <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 "
              loading="lazy"
              />
            </Link>

            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full text-zinc-700 shadow-sm border border-zinc-100">
              {category}
            </span>
        </div>

        <div>
            <CardHeader className="p-4 pb-2">
                <Link to={`/products/${id}`} className="hover:text-emerald-600 transition-colors block">
                    <CardTitle className="text-base font-bold text-zinc-800 line-clamp-1 dark:text-zinc-50">
                      {name}
                    </CardTitle>
                </Link>
            </CardHeader>
            
            <CardContent className="p-4 pt-0 space-y-3">
                <p className="text-zinc-500 text-xs line-clamp-2 min-h-[2rem]">
                    {description}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-50">Price</span>
                        <span className="text-base font-black text-emerald-700">
                            Ksh. {price.toLocaleString()}
                        </span>
                    </div>
                
                    <Button
                    onClick={handleAddToCart}
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center gap-1.5 px-3 rounded-lg shadow-sm shadow-emerald-600/10 active:scale-95 transition-transform"
                    >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add</span>
                    </Button>
                </div>
            </CardContent>
        </div>
    </Card>
    );
}

export default ProductCard;    