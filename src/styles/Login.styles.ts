import styled from '@emotion/styled';

export const Body = styled.div`
  min-height: 100vh;
  background-color: #FAF0E6;
  display: flex;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  // background-color: blue;
  width: 60%;
  position: relative;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  margin: 1rem 0;
  // color: grey;
  // background-color: red;
  margin-bottom: 2rem;
`;

export const LoginBlocksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
  // background-color: yellow;
  padding: 2rem 0;

  
`;

export const LoginBlock1 = styled.div`
  display: flex;
  // background-color: green;
  flex-direction: column;
  justify-content: center;
  width: 10rem;

`;

export const LoginBlock2 = styled.div`
  // background-color: yellow;
  display: flex;
  align-items: center;
//   border-left: thick double #000;
`;

export const Block = styled.div`
border-left: thick double #cdcdcd;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;

`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

export const LoginButton = styled.button`
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
export const LoginGoogleButton = styled.button`
  background-color: #607d8b;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 10rem;

  &:hover {
    background-color: #455a64;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;