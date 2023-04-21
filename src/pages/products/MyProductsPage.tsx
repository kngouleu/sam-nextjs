import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useUser } from '@/contexts/UserContext';
import * as S from '@/styles/MyProducts.styles';

const MyProductsPage: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the user's products from your backend
    // Replace the fetchData function with your actual data fetching function
    async function fetchData() {
      const response = await fetch('/api/user-products?userId=' + user?.uid);
      const data = await response.json();
      setProducts(data.products);
    }
  
    if (user) {
      fetchData();
    } else {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <S.Body>
      <Header />
      <S.MyProductsContainer>
        <h1>My Products</h1>
        {products.length === 0 ? (
          <p>You have not posted any products yet.</p>
        ) : (
          <>
            {/* Render your product list here */}
          </>
        )}
        <Link href="/products/AddProductPage" passHref>
          <S.AddProductButton>Post a Product</S.AddProductButton>
        </Link>
      </S.MyProductsContainer>
      <Footer />
    </S.Body>
  );
};

export default MyProductsPage;
