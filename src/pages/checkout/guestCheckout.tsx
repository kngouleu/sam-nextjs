// pages/checkout/guestCheckout.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/GuestCheckout.styles';
import ProductCheckout from '@/components/ProductCheckout/ProductCheckout';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/configureStore';
import { FormData } from '@/types/types';



const GuestCheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
  });
  const [showAddressConfirmation, setShowAddressConfirmation] = useState(false);
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  console.log(cart)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAddressConfirmation(true);
  };

  const handleAddressConfirmation = () => {
    // Navigate to the next step (Payment)
    router.push('/checkout/payment');
  };

  const handleEdit = () => {
    router.push('/cart')
  }
  return (
    <>
        <S.PageContainer>
        <S.MainContent>
            <S.CheckoutTitle>Checkout</S.CheckoutTitle>
            <S.CheckoutBlock>
                <S.Delivery>
                    <S.DeliveryTitle>Delivery Options</S.DeliveryTitle>
                    <S.DeliveryButtonContainer>
                        <S.ShipPickButton>Ship</S.ShipPickButton>
                        <S.ShipPickButton>Pick up</S.ShipPickButton>
                    </S.DeliveryButtonContainer>
                    
                    {!showAddressConfirmation ? (
                    <S.DeliveryForm onSubmit={handleSubmit}>
                        <S.NameInfoContainer>
                            <S.DeliveryInput type="text" id="firstName" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
                            
                            <S.DeliveryInput type="text" id="lastName" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
                        </S.NameInfoContainer>
                        <S.DeliveryInput type="text" id="address" name="address" placeholder="Address*" value={formData.address} onChange={handleChange} required />


                        <S.ContactInfoContainer>
                            <S.DeliveryInput type="email" id="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />

                            <S.DeliveryInput type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number*" value={formData.phoneNumber} onChange={handleChange} required />
                        </S.ContactInfoContainer>
                        <S.DeliveryFormButtonContainer>
                        <   S.DeliveryFormButton type="submit">Save and continue</S.DeliveryFormButton>
                        </S.DeliveryFormButtonContainer>
                    </S.DeliveryForm>
                    ) : (
                    <div>
                        <h2>Confirm your address</h2>
                        <p>We couldn&apos;t verify your address. Please review it before you continue.</p>
                        <p>
                        You Entered: <br />
                        {formData.address}
                        </p>
                        <button onClick={handleAddressConfirmation}>Confirm</button>
                    </div>
                    )}
                </S.Delivery>

                <S.BagContainer>
                    <S.Bag>
                        <S.BagTitleContainer>
                            <S.BagTitle>In Your Bag</S.BagTitle>
                            <S.BagTitleEdit onClick={handleEdit}>Edit</S.BagTitleEdit>
                        </S.BagTitleContainer>
                        
                        <S.BagPriceInfo>
                                <S.BagPrice>
                                    <S.BagPriceTitle>Subtotal</S.BagPriceTitle>
                                    <S.BagAmount>${totalPrice.toFixed(2)}</S.BagAmount>
                                </S.BagPrice>
                                <S.BagPrice>
                                    <S.BagPriceTitle>Estimated Shipping</S.BagPriceTitle>
                                    <S.BagAmount>${totalPrice.toFixed(2)}</S.BagAmount>
                                </S.BagPrice>
                                <S.BagPrice>
                                    <S.BagPriceTitle>Estimated Tax</S.BagPriceTitle>
                                    <S.BagAmount>${totalPrice.toFixed(2)}</S.BagAmount>
                                </S.BagPrice>
                                <S.BagPrice>
                                    <S.BagPriceTitle>Total</S.BagPriceTitle>
                                    <S.BagAmount>${totalPrice.toFixed(2)}</S.BagAmount>
                                </S.BagPrice>
                        </S.BagPriceInfo>
                            <h3>Arrives by Fri, Apr 14</h3>
                            <S.BagProductList>
                                <S.ProductReview>
                                    <ProductCheckout items={cart} />
                                </S.ProductReview>
                        </S.BagProductList>
                    </S.Bag>
                </S.BagContainer>
            </S.CheckoutBlock>
        </S.MainContent>
        </S.PageContainer>
        <Footer />
    </>
  );
};

export default GuestCheckoutPage;
