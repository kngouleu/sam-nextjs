import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';
import * as S from '../styles/Home.styles';
import SearchForm from '@/components/Search/SearchForm';
import { fetchProducts } from '@/utils/product';
import { Product } from '@/types/types';
import { Props } from '@/types/types';

const Home: NextPage<Props> = () => {
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
  

    return (
      <>
        <S.PageContainer>
          <Header />

          <S.MainContent>
            <SearchForm placeholder= "Search products..." onSearch={handleSearch} />
            {filteredProducts.length > 0 ? (
              <ProductList filteredProducts={filteredProducts} />
            ) : (
              <p>Product not found.</p>
            )}
          </S.MainContent>
          <Footer />
        </S.PageContainer>
      </>
    );
  };
  
  export default Home;
  