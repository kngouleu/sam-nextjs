// components/Cart/Cart.tsx

import React, { useState } from 'react';
import * as S from './Cart.styles';
import { CartItem } from '../../pages/redux/types/cartTypes';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '@/pages/redux/actions/cartActions';
import { connect } from 'react-redux';
import { RootState } from '@/pages/redux/store/configureStore';


interface CartProps {
  items: CartItem[];
  // onRemove: (itemId: string, quantityToRemove?: number) => void;
  // onClear: () => void;
}

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cart.cartItems,
});



const Cart: React.FC<CartProps> = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const [quantitiesToRemove, setQuantitiesToRemove] = useState<Record<string, number>>({});
  const dispatch = useDispatch();

  const handleQuantityToRemoveChange = (itemId: string, value: number) => {
    setQuantitiesToRemove((prev) => ({ ...prev, [itemId]: value }));
  };

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
                <S.QuantityButton onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</S.QuantityButton>
                {item.quantity}
                <S.QuantityButton onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</S.QuantityButton>
              </S.ItemQuantity>
              {/* <S.QuantityToRemoveInput
                type="number"
                min="1"
                max={item.quantity}
                value={quantitiesToRemove[item._id] || 1}
                onChange={(e) => handleQuantityToRemoveChange(item._id, parseInt(e.target.value))}
              /> */}
              {/* <S.RemoveButton onClick={() => onRemove(item._id, quantitiesToRemove[item._id] || 1)}>
                Remove Specified Quantity
              </S.RemoveButton> */}
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
      {/* <S.ClearButton onClick={onClear}>Clear Cart</S.ClearButton> */}
    </S.CartContainer>
  );
};

export default connect(mapStateToProps)(Cart);
