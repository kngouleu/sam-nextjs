// styles/ProductId.styles.ts
import styled from '@emotion/styled';

export const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  margin: 2rem;
  height: 70vh;
  position: relative;
`;

export const ProductImage = styled.div`
  flex: 1;
  max-width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInfo = styled.div`
  flex: 1;
  max-width: 400px;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const ProductHeader = styled.div`
  margin-top: 1rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h1`
  width: auto;
  color: black;
  font-size: 2.3em;
  margin-top: 0%;
  text-align: center;
`;
export const ProductOwner = styled.h1`
  width: auto;
  color: black;
  font-size: 1em;
  margin-top: 0%;
  text-align: center;
`;

export const ProductPrice = styled.h1`
  width: auto;
  color: black;
  font-size: 1.2em;
  text-align:center;
`;


export const FavoriteButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  width: 18rem;
  border: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  cursor: pointer;
  font-size: 1rem;
  color: #ffF;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-item: center;
  &:hover {
    background-color: #0050b3;
  }
  svg {
    font-size: 1.3rem;
    margin-left: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 1rem;
  background-color: transparent;
`;

export const Notification = styled.div<{ isError?: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ isError }) => (isError ? "red" : "green")};
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;