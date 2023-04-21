import React, { useEffect, useState } from 'react';
import { db, app } from '@/utils/firestore';
import { Product } from '@/types/firestore';
import ProductCard from '../ProductCard/ProductCard';
import * as S from './ProductList.styles';
import Link from 'next/link';
import { Firestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

interface ProductListProps {
  onAddToCart: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, 'products');
      const snapshot = await getDocs(productsRef);
      const fetchedProducts: Product[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedProducts.push({
          id: doc.id,
          name: data.name,
          description: data.description,
          price: data.price,
          imageUrl: data.imageUrl,
        });
      });
      
      return fetchedProducts;
    };

    fetchProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <S.ProductList>
      <S.ProductRow>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}  passHref>
            <S.StyledLink>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </S.StyledLink>
          </Link>
        ))}
      </S.ProductRow>
    </S.ProductList>
  );
};

export default ProductList;
