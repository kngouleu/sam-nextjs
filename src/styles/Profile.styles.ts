import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FAF0E6;

`;

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  margin: 1rem 0;
`;

export const InfoItem = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const SignOutButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
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

export const MyProductsLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #444;
  }
`;
export const WithdrawButton = styled.button`
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