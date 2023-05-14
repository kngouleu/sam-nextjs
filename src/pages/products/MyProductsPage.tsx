import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useUser } from '@/contexts/UserContext';
import * as S from '@/styles/MyProducts.styles';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/types/types';
import { getProductsByUser } from '@/utils/product';


const MyProductsPage: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    async function loadProducts() {
      if (!user) return;
      const products = await getProductsByUser(user.uid);
      setProducts(products);
    }
    loadProducts();
  }, [user]);

  return (
    <S.Body>
      <Header />
      <S.MyProductsContainer>
        <h1>My Products</h1>
        {products.length === 0 ? (
          <p>You have not posted any products yet.</p>
        ) : (
          <S.ProductContainer>
            <S.ProductRow>
              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id} passHref>
                  <S.StyledLink>
                    <ProductCard product={product} />
                  </S.StyledLink>
                </Link>
              ))}
            </S.ProductRow>
          </S.ProductContainer>
        )}
        <Link href="/products/AddProductPage" passHref>
          <S.AddProductButton>Post a Product</S.AddProductButton>
        </Link>
      </S.MyProductsContainer>
      <Footer />
    </S.Body>
  );
  
}
export default MyProductsPage;
