import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/pages/redux/store/configureStore';
import { addToCart, removeFromCart, updateCartQuantity, clearCart } from '@/pages/redux/actions/cartActions';
import {CartItem} from '../pages/redux/types/cartTypes'
// export interface CartItem extends Product {
//   quantity: number;
// }



type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
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

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product: CartItem) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    dispatch(updateCartQuantity(productId, quantity));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartContext.Provider value={{ cart, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart, updateCartQuantity: handleUpdateCartQuantity, clearCart: handleClearCart }}>
      {children}
    </CartContext.Provider>
  );
};
