import { ThunkAction } from 'redux-thunk';
import { CartAction, CartActionTypes, CartItem, CartState } from '../types/cartTypes';
import { RootState } from '../store/configureStore';
import { Product } from '../types/productTypes';
import { AnyAction, Dispatch } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_CART } from '../constants/cartConstants';


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
