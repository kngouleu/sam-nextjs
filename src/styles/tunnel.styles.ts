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


export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
