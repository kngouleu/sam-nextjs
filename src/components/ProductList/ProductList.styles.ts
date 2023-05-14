import styled from '@emotion/styled';

export const ProductRow = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 10rem);
  gap: 10px;
  align-self: center;

  padding: 1rem;
  gap: 1rem;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 10rem);
    margin-left: 1,5rem;
    margin-right: 1,5rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 10rem);
    margin-left: 1,5rem;
    margin-right: 1,5rem;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 10rem);
    margin-left: 1,5rem;
    margin-right: 1,5rem;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
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