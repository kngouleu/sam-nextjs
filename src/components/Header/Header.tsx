import React, { useContext } from 'react';
import * as S from './Header.styles';
import { FaShoppingCart, FaUser, FaSignInAlt, FaQuestionCircle, FaBox } from 'react-icons/fa';
import { useUser } from '@/contexts/UserContext';
import { auth } from '@/firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { logout } from '@/pages/redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/pages/redux/store/configureStore';
import { UserAction } from '@/pages/redux/types/authTypes';





const Header: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, UserAction>>();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     console.log('Signed out');
  //     router.push('/');
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //   }
  // };

  return (
    <S.HeaderContainer>
      <S.Logo href="/">Sam</S.Logo>

      <S.Navigation>
        <S.NavItem>
          <S.NavLink href="/help/help">
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
