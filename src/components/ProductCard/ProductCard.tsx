import React from 'react';
import { Product } from '@/types/types';
import * as S from './ProductCard.styles';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Link href={`/products/${product.id}`} style={{ textDecorationLine: 'none' }}>
        <S.ProductCardContainer>
          <S.ProductImage src={product.imageUrl} alt={product.name} />
          <S.ProductName>{product.name}</S.ProductName>
          <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>
        </S.ProductCardContainer>
      </Link>
    </>
  );
};

export default ProductCard;
