import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button } from '@base-ui/react';
import { LogOut, ShoppingCart, Sun, Moon, User } from 'lucide-react'
import { ThemeContext } from '@/context/ThemeContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CartContext } from './context/cartContext';
import { useAuth } from './context/authContext';
import Cart from './cart';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, isAuthenticated,  logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const cartItemCount = cart?.length || 0;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex justify-between items-center p-4 text-foreground">

      <Link to="/" className="text-xl font-black tracking-tight hover:opacity-90 transition-opacity text-emerald-600 uppercase">
        Pitchside<span className="text-foreground font-bold lowercase">.</span>
      </Link>
    
      <div className="flex items-center gap-4">

        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
          {theme === 'dark' ? <Sun className="h-4 w-4 text-emerald-400" /> : <Moon className="h-4 w-4 text-emerald-600" />}
          <span className="sr-only">Toggle theme</span>
        </Button>


        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-9 w-9 border bg-secondary/50 hover:text-emerald-600">
              <ShoppingCart className="h-4 w-4 text-foreground" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white animate-in fade-in zoom-in-95 duration-200">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md max-h-[85vh] flex flex-col p-6 overflow-hidden bg-background">
            <DialogHeader className="border-b pb-4">
              <DialogTitle className="flex justify-between items-center text-xl font-bold">
                <span>Team Cart</span>
                <span className="text-xs font-normal text-white px-2 py-0.5 bg-emerald-600 rounded-full">
                  {cartItemCount} items
                </span>
              </DialogTitle>
              <DialogDescription>
                Review or manage football equipment added to your squad selection.
              </DialogDescription>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto">
              <Cart onCheckout={() => setIsOpen(false)}/>
            </div>
          </DialogContent>
        </Dialog>

        {isAuthenticated ? (
          <div className="flex items-center gap-3 pl-2 border-l border-muted">
            <div className="flex items-center gap-2 text-sm max-w-37.5">
              <div className="h-7 w-7 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center justify-center border shrink-0 border-emerald-100 dark:border-emerald-900">
                <User className="h-4 w-4" />
              </div>
              <span className="truncate font-medium hidden md:inline">
                {user?.name || user?.email}
              </span>
            </div>
            
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={logout}
              className="h-8 px-2 sm:px-3 flex items-center gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sub Out</span>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3 pl-2 border-l border-muted text-sm font-medium">
            <Link to="/login" className="text-muted-foreground hover:text-emerald-600 transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="bg-emerald-600 text-white px-3 py-1.5 rounded-md hover:bg-emerald-700 transition-colors shadow-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
    )
}