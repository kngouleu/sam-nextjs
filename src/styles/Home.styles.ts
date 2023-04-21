import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FAF0E6;
  position: relative;
`;

export const SearchForm = styled.form`
  margin: 1rem;
  display: flex; 
  justify-content: center; 
  align-item: center;
  // width: 100%;
  // position: absolute;
  // top: 8%;
  // left: 50%;
  // transform: translate(-50%, -50%);
 
`;

export const SearchInput = styled.input`
  width: auto;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  // position: absolute;
  // left: 50%;

`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  width: 18rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-item: center;
  &:hover {
    background-color: #0050b3;
  }

  
`;

export const CheckoutButton = styled(Button)`
  margin: 1rem auto;
`;

export const ClearButton = styled.button`
  background-color: #607d8b;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #455a64;
  }
`;
