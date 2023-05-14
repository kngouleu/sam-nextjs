import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #faf0e6;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const InfoItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const ButtonContainer = styled.div `display: flex; justify-content: space-evenly; margin-top: 2rem`;

export const EditProfileButton = styled.button`
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
