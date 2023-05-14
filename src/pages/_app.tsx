import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CartProvider } from '@/contexts/cart-context';
import { UserProvider } from '@/contexts/UserContext';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../redux/store/configureStore';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserProvider>
          <CartProvider>
            <Component {...pageProps} />
            
          </CartProvider>
        </UserProvider>
      </PersistGate>
    </Provider>
  );
}
