// components/Cart/Cart.tsx

import React, { useState } from 'react';
import * as S from './Cart.styles';
import { CartItem } from '../../redux/types/cartTypes';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '@/redux/actions/cartActions';
import { connect } from 'react-redux';
import { RootState } from '@/redux/store/configureStore';


export interface CartProps {
  items: CartItem[];
}

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
});



const Cart: React.FC<CartProps> = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const dispatch = useDispatch();


  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    dispatch(updateCartQuantity(itemId, quantity));
  };

  return (
    <S.CartContainer>
      <h2>Cart</h2>
      {items.length > 0 ? (
        <S.CartItems>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemPrice>${item.price.toFixed(2)}</S.ItemPrice>
              <S.ItemQuantity>
                <S.QuantityButton onClick={() => handleUpdateQuantity(item.id, item.quantity > 0 ? item.quantity - 1 : item.quantity)}>-</S.QuantityButton>
                {item.quantity}
                <S.QuantityButton onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</S.QuantityButton>
              </S.ItemQuantity>
              <S.RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
                Remove Specified Quantity
              </S.RemoveButton>
              <S.RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>Remove All</S.RemoveButton>
            </S.CartItem>
          ))}
        </S.CartItems>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <S.TotalPrice>Total: ${totalPrice.toFixed(2)}</S.TotalPrice>
    </S.CartContainer>
  );
};

export default connect(mapStateToProps)(Cart);
