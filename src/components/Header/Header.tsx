import React, { useState } from 'react';
import * as S from './Header.styles';
import { FaShoppingCart, FaUser, FaSignInAlt, FaQuestionCircle, FaBox } from 'react-icons/fa';
import { useUser } from '@/contexts/UserContext';
import { useRouter } from 'next/router';
import { logout } from '@/redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/redux/store/configureStore';
import { UserAction } from '@/redux/types/authTypes';
import Hamburger from 'hamburger-react'


const Header: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false)

  const dispatch = useDispatch<ThunkDispatch<RootState, {}, UserAction>>();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <S.HeaderContainer>
      <S.Logo href="/">Sam</S.Logo>
      <S.HeaderNav >
        <S.Hamburger >
          <Hamburger size={20} toggled={isOpen} toggle={setOpen}  />
        </S.Hamburger>
        <S.NavHamburger style={isOpen ? { right: '0', visibility: 'visible'} : {right: '-300px'} }>
          <S.NavItem>
            <S.NavLink href="/help/home">
              <FaQuestionCircle /> Help
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/products">
              <FaBox /> Products
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/cart">
              <FaShoppingCart /> Cart
            </S.NavLink>
          </S.NavItem>
          {user ? (
            <>
              <S.NavItem>
                <S.NavLink href="/profile">
                  <FaUser /> Profile
                </S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink onClick={handleLogout}>
                  <FaSignInAlt /> Sign out
                </S.NavLink>
              </S.NavItem>
            </>
          ) : (
            <>
              <S.NavItem>
                <S.NavLink href="/login">
                  <FaSignInAlt /> Log in
                </S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink href="/membership">
                  <FaUser /> Sign up
                </S.NavLink>
              </S.NavItem>
            </>
          )}
        </S.NavHamburger>
      </S.HeaderNav>
      <S.Navigation>
        <S.NavItem>
          <S.NavLink href="/help/home">
            <FaQuestionCircle /> Help
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink href="/products">
            <FaBox /> Products
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink href="/cart">
            <FaShoppingCart /> Cart
          </S.NavLink>
        </S.NavItem>
        {user ? (
          <>
            <S.NavItem>
              <S.NavLink href="/profile">
                <FaUser /> Profile
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink onClick={handleLogout}>
                <FaSignInAlt /> Sign out
              </S.NavLink>
            </S.NavItem>
          </>
        ) : (
          <>
            <S.NavItem>
              <S.NavLink href="/login">
                <FaSignInAlt /> Log in
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink href="/membership">
                <FaUser /> Sign up
              </S.NavLink>
            </S.NavItem>
          </>
        )}
      </S.Navigation>
    </S.HeaderContainer>
  );
};

export default Header;
