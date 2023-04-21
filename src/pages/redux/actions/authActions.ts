import { auth } from '@/firebase/firebaseConfig';
import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
  sendPasswordResetEmail as sendPasswordResetEmailFirebase,
} from 'firebase/auth';
import { ThunkAction } from 'redux-thunk';
import  {RootState} from '../store/configureStore';
import { UserActionTypes, UserDispatch, User, UserError, UserAction, AuthActionTypes, AuthAction } from '../types/authTypes';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from '../constants/authConstants';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (): ThunkAction<
  void,
  RootState,
  {},
  AuthAction
> => async (dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error('Sign in with Google failed:', error);
    dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: error as string });
  }
};

export const signInWithEmailAndPassword = (
  email: string,
  password: string
): ThunkAction<{}, RootState, {}, UserAction> => async (
  dispatch: UserDispatch
) => {
  try {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });
    const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
    const user = userCredential.user;
    
    dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error('Sign in failed:', error);
    dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: error as string });
  }
};



export const signUpWithEmailAndPassword = (
  email: string,
  password: string
): ThunkAction<void, RootState, {}, UserAction> => async (
  dispatch: UserDispatch
) => {
  try {
    dispatch({ type: UserActionTypes.SIGNUP_REQUEST });
    const userCredential = await createUserWithEmailAndPasswordFirebase(auth, email, password);
    const user = userCredential.user;
    if (user) {
      dispatch({ type: UserActionTypes.SIGNUP_SUCCESS, payload: user });
    } else {
      throw new Error('User was not created successfully');
    }
  } catch (error) {
    console.error('Sign up failed:', error);
    dispatch({ type: UserActionTypes.SIGNUP_FAILURE, payload: error as string });
  }
};


// export const resetPassword = (
//   email: string
// ): ThunkAction<void, RootState, null, UserAction> => async (
//   dispatch: UserDispatch
// ) => {
//   try {
//     dispatch({ type: UserActionTypes.RESET_PASSWORD_REQUEST });
//     await sendPasswordResetEmailFirebase(auth, email);
//     dispatch({ type: UserActionTypes.RESET_PASSWORD_SUCCESS });
//   } catch (error) {
//     console.error('Reset password failed:', error);
//     dispatch({ type: UserActionTypes.RESET_PASSWORD_FAILURE, payload: error as string });
//   }
// };

export const logout = (): ThunkAction<
  void,
  RootState,
  {},
  AuthAction
> => async (dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.LOGOUT_REQUEST });
    await auth.signOut();
    dispatch({ type: AuthActionTypes.LOGOUT_SUCCESS });
  } catch (error) {
    console.error('Logout failed:', error);
    dispatch({ type: AuthActionTypes.LOGOUT_FAILURE, payload: error as string  });
  }
};
