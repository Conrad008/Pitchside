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
}