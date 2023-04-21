import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
  }
  width: auto;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;


export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin-left: 1rem;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #C0C0C0;
  }
`;
