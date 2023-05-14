import { Action } from 'redux';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface UserState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
}

export enum UserActionTypes {

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  SIGNUP_REQUEST = "SIGNUP_REQUEST",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAILURE = "SIGNUP_FAILURE",
  RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE",

}



interface LoginRequestAction extends Action {
  type: AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction extends Action {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailureAction extends Action {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: string;
}

interface LogoutRequestAction extends Action {
  type: AuthActionTypes.LOGOUT_REQUEST;
}

interface LogoutSuccessAction extends Action {
  type: AuthActionTypes.LOGOUT_SUCCESS;
}

interface LogoutFailureAction extends Action {
  type: AuthActionTypes.LOGOUT_FAILURE;
  payload: string;
}



export type UserDispatch = (args: UserAction | UserError) => UserAction | UserError;
// export type UserDispatch = any;







// interface SignupRequestAction extends Action {
//   type: UserActionTypes.SIGNUP_REQUEST;
// }
// interface SignupSuccessAction extends Action {
//   type: UserActionTypes.SIGNUP_SUCCESS;
// }
// interface SignupFailureAction extends Action {
//   type: UserActionTypes.SIGNUP_FAILURE;
// }

interface SignupRequestAction extends Action {
  type: UserActionTypes.SIGNUP_REQUEST;
}

interface SignupSuccessAction extends Action {
  type: UserActionTypes.SIGNUP_SUCCESS;
  payload: User;
}

interface SignupFailureAction extends Action {
  type: UserActionTypes.SIGNUP_FAILURE;
  payload: string;
}

export type SignupAction =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction;





// export type UserAction =
//   | FetchUserRequestAction
//   | FetchUserSuccessAction
//   | FetchUserFailureAction;
export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

export type UserAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction;

export type UserError = {
  message: string;
  code: string;
};
