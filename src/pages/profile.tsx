import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Profile.styles';
import { useUser } from '@/contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProfilePage: React.FC = () => {
  const { user } = useUser();
  const [balance, setBalance] = useState<number | null>(null);
  const router = useRouter();

  async function handleWithdraw() {
    try {
      const response = await fetch('/api/withdraw?userId=' + user?.uid);
      const data = await response.json();

      if (data.success) {
        alert('Withdrawal request submitted successfully.');
        setBalance(0);
      } else {
        alert('Error submitting the withdrawal request.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.PageContainer>
      <Header />

      <S.MainContent>
        <S.ProfileContainer>
          <h1>{user?.displayName}</h1>
          <S.InfoList>
            <S.InfoItem>
              <S.InfoLabel>Email:</S.InfoLabel> {user?.email}
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoLabel>UID:</S.InfoLabel> {user?.uid}
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoLabel>Balance:</S.InfoLabel> ${balance || 'loading...'}
            </S.InfoItem>
          </S.InfoList>
          <S.ButtonContainer>
            <S.WithdrawButton onClick={handleWithdraw}>Withdraw</S.WithdrawButton>
            <S.AddProductButton onClick={() => router.push('/products/AddProductPage')}>Add Product</S.AddProductButton>
          </S.ButtonContainer>
          <Link href="/products/MyProductsPage">
            <S.MyProductsLink>My Products</S.MyProductsLink>
          </Link>
        </S.ProfileContainer>
      </S.MainContent>

      <Footer />
    </S.PageContainer>
  );
};

export default ProfilePage;
