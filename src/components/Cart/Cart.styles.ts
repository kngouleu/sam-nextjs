import styled from '@emotion/styled';

export const CartContainer = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
`;

export const CartItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  /* Set a fixed width for the item name column */
  & > span:first-of-type {
    flex-basis: 50%;
    max-width: 50%;
  }
`;


export const ItemName = styled.span`
  font-weight: bold;
  display: flex;
  flew-wrap: wrap;
`;

export const ItemPrice = styled.span`
  color: #333;
`;

export const ItemQuantity = styled.span`
  color: #666;
`;

export const RemoveButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1rem;
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


export const QuantityToRemoveInput = styled.input`
  width: 50px;
  margin-left: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
`;

export const QuantityButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0069d9;
  }
`;
