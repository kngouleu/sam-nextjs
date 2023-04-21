import styled from '@emotion/styled';

export const ProductRow = styled.div`
  // display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  // justify-content: center;
  // align-items: stretch;
  display: grid;
  grid-template-columns: repeat(4, 10rem);
  gap: 10px;
  align-self: center;

  padding: 1rem;
  gap: 1rem;
  border: none;
  cursor: pointer;
  

`;
export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  // flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;


`;

export const StyledLink = styled.button`
  
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;
  border: none;
  &:hover {
    transform: scale(1.05);
  }
`;