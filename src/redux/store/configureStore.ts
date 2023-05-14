import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';
import { AuthAction, AuthState } from '../types/authTypes';
import { CartAction, CartState } from '../types/cartTypes';
import { ProductAction, ProductState } from '../types/productTypes';
import { cartMiddleware } from '../middleware/cartMiddleware';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export interface RootState {
  auth: AuthState;
  cart: CartState;
  product: ProductState;
}

export type AppDispatch = ThunkDispatch<RootState, void, AuthAction | CartAction | ProductAction>;

const middleware = [thunk]; 

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});


export const persistor = persistStore(store);


export default store;
