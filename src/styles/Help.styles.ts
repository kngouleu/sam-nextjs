import styled from '@emotion/styled';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FAF0E6;

`;


export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SearchBarContainer = styled.div`
  margin: 1rem 0;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
