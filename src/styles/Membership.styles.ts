import styled from '@emotion/styled';

export const Body = styled.div`
  min-height: 100vh;
  background-color: #FAF0E6;
  display: flex;
  flex-direction: column

`;

export const MembershipContainer = styled.div`
  padding: 1rem;
  width: 20rem;
  // max-width: 400px;
  margin: 2rem auto;
  flex: 1;
`;
export const MembershipTitle = styled.h1`
  text-align: center;
  margin : 1rem 0;
`;

export const MembershipForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 1rem;
`;

export const SignUpButton = styled.button`
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

export const SignUpGoogleButton = styled.button`
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

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;
