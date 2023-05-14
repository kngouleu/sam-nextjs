// pages/cart.tsx

import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cart from '@/components/Cart/Cart';
import * as S from '@/styles/Home.styles';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '@/redux/actions/cartActions';
import { RootState } from '@/redux/store/configureStore';
import { CartPageProps } from '@/types/types';




const CartPage: NextPage<CartPageProps> = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectToCheckout = () => {
    router.push('/checkout/tunnel');
  };
  


  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cart);
  return (
    <S.PageContainer>
      <Header/>
      <S.MainContent>
        <Cart items={cart} />
        <S.CheckoutButton onClick={redirectToCheckout}>Proceed to Checkout</S.CheckoutButton>
        <S.ClearButton onClick={handleClearCart}>Clear Cart</S.ClearButton>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default CartPage;
