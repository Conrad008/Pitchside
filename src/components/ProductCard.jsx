import { useContext } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CartContext } from '@/context/CartContext';

function ProductCard({id, name, price, description, category, image}) {
    const { cart, setCart } = useContext(CartContext);

    const handlAddToCart = () => {
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
    }
}