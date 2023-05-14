import React from 'react'
import * as S from './ProductCheckout.styles'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/configureStore';
import { CartProps } from '../Cart/Cart';



const ProductCheckout: React.FC<CartProps> = ({ items }) => {
  return (
    <>
        {items.length > 0 ? (
        <>
            {items.map((item) => (
            <S.Product>
                <S.ProductImage src={item.imageUrl} />
                <S.ProdutCaracteristic>
                    <S.ProductName>{item.name}</S.ProductName>
                    <S.ProductAmount>
                        Qty: {item.quantity}
                    </S.ProductAmount>
                    <S.ProductPrice>
                        ${item.quantity * item.price}
                    </S.ProductPrice>
                </S.ProdutCaracteristic>
            </S.Product>
            ))}
        </>
            
        ) : <div>No products found</div>
        }
    </>
  )
}

export default ProductCheckout