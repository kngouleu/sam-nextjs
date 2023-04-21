import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CartProvider } from '@/contexts/cart-context';
import { UserProvider } from '@/contexts/UserContext';
import store from '../pages/redux/store/configureStore';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider>
    </Provider>
  );
}
