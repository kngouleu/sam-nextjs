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

export const Section = styled.section`
  background: #F0F8FF;
  text-align: center;
  margin: 2rem;
`;
export const SectionTitle = styled.h1`
padding: 44px 42px 0px 42px;

`;
export const SectionList = styled.ul`
  display: inline-block;
  column-count: 2;
  column-rule: solid 1px rgba(17,26,133,0.27);
  list-style: none;
  text-align: left;
  column-gap: 7rem;
  padding: 0 15px;
  margin-top: 42px;
  margin-left: 8px;
  @media only screen and (max-width:768px)
  {
    column-gap: 4rem;
  }


  `;
export const SectionElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;

`;


export const ContactContainer = styled.div`
  box-sizing: border-box;
  max-width: 1248px;
  margin: auto 0;
  padding: 72px 0;
  background: #F5F5DC;

`
export const ContactUs = styled.div`
  h1{
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;  

`
export const ContactWay = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 10px 56px;
  padding-left: 24px;
  padding-right: 24px;

  background: #fff;
  margin-right: 16px;
  min-height: 120px;
  max-width: 598px;
  display: flex;
  align-items: center;
  
`
export const ContactText = styled.span`
  display: inline-block;
  font-size: 0.75em;
  margin-left: 4px;
  font-weight: bold
`