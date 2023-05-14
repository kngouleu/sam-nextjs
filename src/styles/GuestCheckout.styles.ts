import styled from '@emotion/styled';

export const PageContainer = styled.div`
min-height: 100vh;
background-color: #FAF0E6;
display: flex;
flex: 1;
flex-direction: column;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #FAF0E6;
`;

export const CheckoutOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const CheckoutOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckoutButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: center;

  &:hover {
    background-color: #0050b3;
  }
`;

export const CheckoutTitle = styled.h1`
`;
export const CheckoutBlock = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;

`;
export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.66666666666666%
`;
export const DeliveryTitle = styled.h2`
  font-size: 24px;
`;
export const DeliveryButtonContainer = styled.div`
`;

export const ShipPickButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px  6px 15px 0;

`;

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  margin-top: 20px;

`;

export const NameInfoContainer = styled.div`
`;
export const ContactInfoContainer = styled.div`
`;
export const DeliveryInput = styled.input`
  width: 30%;
  font-size: 16px;
  padding: 10px 20px;
  margin-left: 5px;
  border: solid 1px;
  border-radius: 8px;
`;
export const DeliveryFormButtonContainer = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  gap: 12px;
  justify-content: center;
`;
export const DeliveryFormButton = styled.button`
  background: rgb(229, 229, 229);
  color: rgb(117, 117, 117);
  border-color: transparent;
  cursor: default;
  font-size: 16px;
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 8px;


`;
export const BagContainer = styled.div`
  width: 33%;
`;
export const Bag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const BagTitleContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
export const BagTitle = styled.h1`
  font-size: 16px;
`;
export const BagTitleEdit = styled.button`
  font-size: 12px;
  line-height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline 1.5px rgb(17, 17, 17);
`;

export const BagPriceInfo = styled.div`
`;
export const BagPrice = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;

`;
export const BagPriceTitle = styled.span`
  font-size: 16px;
  
`;
export const BagAmount = styled.span`
`;
export const BagProductList = styled.ul`
  list-style: none;
`;
export const ProductReview = styled.div`
`;


export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

