import { createContext, useContext, useState, useEffect } from 'react';
// import { Product } from '@/types/sanity';

export type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, callback: (added: boolean) => void) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);
  const addToCart = (product: Product, callback: (added: boolean) => void) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      let newCart: CartItem[];

      if (existingProduct) {
        callback(true);
        newCart = prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        callback(true);
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newCart));
      }

      return newCart;
    });
  };

  const removeFromCart = (productId: string, quantityToRemove: number = 1) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item._id === productId) {
          const newQuantity = item.quantity - quantityToRemove;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
        }
        return item;
      }).filter((item) => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};