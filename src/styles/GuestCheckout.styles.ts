// styles/tunnel.styles.ts

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
  // background-color: yellow;
  justify-content: space-between;

`;
export const Delivery = styled.div`
  // background-color: red;
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
  // width: 30%;
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
  // background-color: yellow;
  height: 20%;
  margin-top: 20px;

`;

// export const DeliveryLabel = styled.label`
// `;
export const NameInfoContainer = styled.div`
  // background-color: blue;
`;
export const ContactInfoContainer = styled.div`
  // background-color: green;
  // display: flex;
  // flex-direction: row;

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
  // background: pink;
  justify-content: center;

`;
export const DeliveryFormButton = styled.button`
  background: rgb(229, 229, 229);
  color: rgb(117, 117, 117);
  border-color: transparent;
  cursor: default;
  
  // width: 30%;
  font-size: 16px;
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 8px;


`;
export const BagContainer = styled.div`
  width: 33%;
  // background-color: blue;


`;
export const Bag = styled.div`
  // background-color: blue;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const BagTitleContainer = styled.div`
  // background-color: blue;
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
  // background-color: green;
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
  // background-color: #ececec;
  // display: table;
  // border-spacing: 0 23px;
  

`;
export const Product = styled.div`
  display: flex;
  align-items: center;
  // background-color: #455d7a;
  margin-bottom: 23px;
  // height: 23vh;
  
`;
export const ProductImage = styled.div`
  background-color: #000;
  height: 50px;
  width: 50px;
  margin-right: 3px;

`;
export const ProdutCaracteristic = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: #a2a8d3;
  margin-left: 3px;
  padding: 3px;
  // width: 20%;
  
  align-items: start;

`;
export const ProductName = styled.p`
  font-weight: bold;
  margin-bottom: 3px;
`;
export const ProductAmount = styled.p`
`;
export const ProductPrice = styled.p`
`;



export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

