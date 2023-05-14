import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import * as S from '@/styles/Membership.styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/configureStore';
import { signInWithGoogle, signUpWithEmailAndPassword } from '../redux/actions/authActions';
import { ThunkDispatch } from 'redux-thunk';
import { UserAction } from '../redux/types/authTypes';

const MembershipPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, UserAction>>();
  const { auth } = useSelector((state: RootState) => state);

  const isStrongPassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  };

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Use 8 characters or more for your password');
      return;
    }

    if (!isStrongPassword(password)) {
      setError('Please choose a stronger password. Try a mix of letters, numbers, and symbols.');
      return;
    }

    setError(''); // Reset the error message if the password is valid
    dispatch(signUpWithEmailAndPassword(email, password));
  };

  return (
    <>
      <S.Body>
        <Header />
        <S.MembershipContainer>
          <S.MembershipTitle>Sign Up</S.MembershipTitle>
          <S.MembershipForm onSubmit={handleSignUp}>
            <S.FormLabel htmlFor="name">Name *</S.FormLabel>
            <S.FormInput
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <S.FormLabel htmlFor="email">Email address *</S.FormLabel>
            <S.FormInput
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <S.FormLabel htmlFor="password">Password *</S.FormLabel>
            <S.FormInput
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>} {/* Add error message here */}

            <S.ButtonContainer>
              <S.SignUpButton type="submit">Sign Up</S.SignUpButton>
              <S.SignUpGoogleButton onClick={() => dispatch(signInWithGoogle())}>
                Sign Up with Google
              </S.SignUpGoogleButton>
            </S.ButtonContainer>
          </S.MembershipForm>
        </S.MembershipContainer>
        <Footer />
      </S.Body>
    </>
  );
};

export default MembershipPage;
