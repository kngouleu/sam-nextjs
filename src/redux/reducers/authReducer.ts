import { AuthState, AuthActionTypes, AuthAction } from '../types/authTypes';

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case AuthActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
      };
    case AuthActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
