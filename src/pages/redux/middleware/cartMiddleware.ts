import { CartAction, CartActionTypes, CartItem } from '../types/cartTypes';

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const cartMiddleware = (store: any) => (next: any) => (action: CartAction) => {
  const { cartItems } = store.getState().cart;
  
  // Call the next middleware or the reducer
  const result = next(action);

  if (action.type !== CartActionTypes.UPDATE_CART_QUANTITY) {
    saveCartToLocalStorage(cartItems);
  }

  return result;
};
