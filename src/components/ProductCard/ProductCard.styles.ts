import styled from '@emotion/styled';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #FAF0E6;
  border-radius: 4px;
  color: black;
  
`;


export const ProductImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  
`;

export const ProductName = styled.h3`
  font-size: 1.125rem;
  margin: 0.5rem 0;
  text-decoration: none;

`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

`;

