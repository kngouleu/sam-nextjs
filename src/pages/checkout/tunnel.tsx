import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/tunnel.styles';
import * as T from '@/styles/Home.styles';
import { useUser } from '@/contexts/UserContext';
import { TunnelPageProps } from '@/types/types';


const TunnelPage: NextPage<TunnelPageProps> = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleGuestCheckout = () => {
    router.push('/checkout/guestCheckout');
  };

  const handleMemberCheckout = () => {
    router.push('/checkout/memberCheckout');
  };

  return (
    <>
      <S.PageContainer>
        <S.MainContent>
          <h1>Choose How You Would Like To Check Out</h1>
          {user ? (
            <S.CheckoutOptionContainer>
              <S.CheckoutOption>
                <h2>Check out as a member for free shipping</h2>
                <p>Use your Sam Member sign-in for Sam</p>
                <S.CheckoutButton onClick={handleMemberCheckout}>
                  Check out as a Member
                </S.CheckoutButton>
              </S.CheckoutOption>
              <S.CheckoutOption>
                <h2>Check out as a Guest</h2>
                <p>
                  You can create a free Sam Member Profile at any point during
                  the checkout process.
                </p>
                <S.CheckoutButton onClick={handleGuestCheckout}>
                  Guest Checkout
                </S.CheckoutButton>
              </S.CheckoutOption>
            </S.CheckoutOptionContainer>
          ) : (
            <S.CheckoutOptionContainer>
              <S.CheckoutOption>
                <h2>Check out as a Guest</h2>
                <p>
                  You can create a free Sam Member Profile at any point during
                  the checkout process.
                </p>
                <S.CheckoutButton onClick={handleGuestCheckout}>
                  Guest Checkout
                </S.CheckoutButton>
              </S.CheckoutOption>
            </S.CheckoutOptionContainer>
          )}
          <S.SignUpButtonContainer>
            <S.CheckoutButton onClick={() => router.push('/membership')}>
              Sign Up
            </S.CheckoutButton>
          </S.SignUpButtonContainer>
        </S.MainContent>
      </S.PageContainer>
      <Footer />
    </>
  );
};

export default TunnelPage;
