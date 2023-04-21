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

  // Fetch the user's balance from your backend
  async function fetchBalance() {
    // Replace this URL with the URL to your actual backend endpoint
    const response = await fetch('/api/user-balance?userId=' + user?.uid);
    const data = await response.json();
    setBalance(data.balance);
  }

  // Handle withdrawal request
  async function handleWithdraw() {
    // Call your backend to initiate the withdrawal process
    // Replace this URL with the URL to your actual backend endpoint
    const response = await fetch('/api/withdraw?userId=' + user?.uid);
    const data = await response.json();

    if (data.success) {
      alert('Withdrawal request submitted successfully.');
      setBalance(0);
    } else {
      alert('Error submitting the withdrawal request.');
    }
  }

  return (
    <S.Body>
      <Header />
      <S.ProfileContainer>
        <h1>Profile</h1>
        {user && (
          <>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>UID: {user.uid}</p>
            <p>Balance: ${balance}</p>
            <S.WithdrawButton onClick={handleWithdraw}>Withdraw</S.WithdrawButton>
            <Link href="/products/MyProductsPage">
              <S.MyProductsLink>My Products</S.MyProductsLink>
            </Link>
          </>
        )}
      </S.ProfileContainer>
      <Footer />
    </S.Body>
  );
};

export default ProfilePage;
