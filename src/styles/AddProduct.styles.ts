import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FAF0E6;

`;

export const AddProductContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin-top: 1rem;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
