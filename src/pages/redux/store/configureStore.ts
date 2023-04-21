import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';
import { AuthAction, AuthState } from '../types/authTypes';
import { CartAction, CartState } from '../types/cartTypes';
import { ProductAction, ProductState } from '../types/productTypes';
import { cartMiddleware } from '../middleware/cartMiddleware'; // Import the middleware function


export interface RootState {
  auth: AuthState;
  cart: CartState;
  product: ProductState;
}

export type AppDispatch = ThunkDispatch<RootState, void, AuthAction | CartAction | ProductAction>;

const middleware = [thunk, cartMiddleware]; // Add the middleware function here

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

store.subscribe(() => {
  localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
});

export default store;
