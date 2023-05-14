import { CartAction, CartActionTypes, CartItem } from '../types/cartTypes';
import { AnyAction } from 'redux';


export const addToCart = (item: CartItem): AnyAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id: string) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: id,
});

export const updateCartQuantity = (itemId: string, newQuantity: number): CartAction => ({
  type: CartActionTypes.UPDATE_CART_QUANTITY,
  payload: {
    id: itemId,
    quantity: newQuantity,
  },
});

export const clearCart = (): CartAction => ({
  type: CartActionTypes.EMPTY_CART,
});
