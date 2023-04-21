import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FAF0E6;

`;

export const MyProductsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AddProductButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #444;
  }
`;
