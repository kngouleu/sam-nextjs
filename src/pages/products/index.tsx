import { GetStaticProps, NextPage } from 'next';
import { sanityClient } from '@/utils/client';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// import { Product } from '@/types/sanity';
import ProductList from '@/components/ProductList/ProductList';
import * as S from '@/styles/Home.styles';
import React, { useEffect, useState } from 'react';
import SearchForm from '@/components/Search/SearchForm';
import { fetchProducts } from '@/utils/product';
import { Product } from '@/types/firestore';


type Props = {
  products: Product[];
};

interface SearchProps {
  onSearch: (searchTerm: string) => Promise<void>;
}

const Products: NextPage<Props> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  // const [products, setProducts] = useState<{ id: string; }[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  // function addToCart(productId: string): void {
  //   throw new Error('Function not implemented.');
  // }

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
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
      <Footer />
    </S.PageContainer>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const products = await sanityClient.fetch(
    '*[_type == "product" && !(_id in path("drafts.**"))]'
  );

  return {
    props: { products },
  };
};
