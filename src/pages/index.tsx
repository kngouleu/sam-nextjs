import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { sanityClient } from '@/utils/client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';
import Cart from '../components/Cart/Cart';
import * as S from '../styles/Home.styles';
import SearchForm from '@/components/Search/SearchForm';
import { fetchProducts } from '@/utils/product';
import { Product } from '@/types/firestore';

type HomeProps = {
  products: Product[];
};

interface SearchProps {
  onSearch: (searchTerm: string) => Promise<void>;
}

const Home: NextPage<HomeProps> = () => {
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);
  
    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);
      router.push('/products');
    };
  
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  
  function addToCart(productId: string): void {
    throw new Error('Function not implemented.');
  }

    return (
      <>
        <S.PageContainer>
          <Header />

          <S.MainContent>
            <SearchForm onSearch={handleSearch} />
            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} onAddToCart={addToCart} />
            ) : (
              <p>Product not found.</p>
            )}
          </S.MainContent>
  
          {/* <Cart items={cartItems} onRemove={removeFromCart} onClear={clearCart} /> */}
          <Footer />
        </S.PageContainer>
      </>
    );
  };
  
  export default Home;
  