import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 0;
  transition: all .3s ease;
  width: auto;
  z-index: 1000;


`;

export const Logo = styled.a`
  font-size: 1.3em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;


export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    {
      position: absolute;
      right: -700px;
      transition: all ease 0.3s;
    }
`;

export const NavItem = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 768px) {
    {
      padding: 1rem;
      margin-left: 1rem;
    }

`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #C0C0C0;
  }

  @media only screen and (max-width: 768px) {
    {
      font-size: 18px;
    }
`;
export const HeaderNav = styled.div`
  @media only screen and (min-width: 769px) {
  {
    display: none;
  }
`;
export const Hamburger = styled.div`
  color: #fff;
  transition: all .3s ease;
  
`;
export const NavHamburger = styled.nav`
  background: #000;
  height: 80vh;
  width: 30vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease 0.2s;

`;

