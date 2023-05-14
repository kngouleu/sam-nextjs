import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Login.styles';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword, signInWithGoogle } from '../redux/actions/authActions';
import { UserAction } from '../redux/types/authTypes';
import { ThunkDispatch } from 'redux-thunk';
import { useRouter } from 'next/router';
import { RootState } from '../redux/store/configureStore';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, UserAction>>();
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(signInWithEmailAndPassword(email, password));
    router.push('/profile')
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  return (
    <>
      <S.Body>
        <Header />
        <S.LoginContainer>
          <S.LoginTitle>Login</S.LoginTitle>
          <S.LoginBlocksContainer>
            <S.LoginBlock1>
              <S.LoginForm onSubmit={handleLogin}>
                <S.FormLabel htmlFor="email">Email:</S.FormLabel>
                <S.FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <S.FormLabel htmlFor="password">Password:</S.FormLabel>
                <S.FormInput
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.LoginButton type="submit">Login</S.LoginButton>
              </S.LoginForm>
            </S.LoginBlock1>
            <S.Block></S.Block>
            <S.LoginBlock2>
              <S.LoginGoogleButton onSubmit={handleGoogleSignIn}>Log in with Google</S.LoginGoogleButton>
            </S.LoginBlock2>
          </S.LoginBlocksContainer>
        </S.LoginContainer>
        <Footer />
      </S.Body>
    </>
  );
};

export default LoginPage;
