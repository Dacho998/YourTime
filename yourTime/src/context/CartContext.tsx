import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext'; 
import type { Watch } from "../components/watches/Watch";

interface CartItem extends Watch {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (watch: Watch) => boolean;  
  removeFromCart: (watchId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);

  const storageKey = user ? `cart_${user.id}` : null;

  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCart(JSON.parse(saved));
      } else {
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, [storageKey]);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(cart));
    }
  }, [cart, storageKey]);

  const addToCart = (watch: Watch): boolean => {
    if (!user) return false; 
    setCart(prev => {
      const existing = prev.find(item => item.id === watch.id);
      if (existing) {
        return prev.map(item =>
          item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...watch, quantity: 1 }];
    });
    return true;
  };

  const removeFromCart = (watchId: string) => {
    setCart(prev => prev.filter(item => item.id !== watchId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

