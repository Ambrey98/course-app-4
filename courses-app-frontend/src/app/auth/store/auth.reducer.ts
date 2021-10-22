import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
};

const initialState: AuthState = {
  isAuthorized : false,
  token : '',
  errorMessage : ''
};

export const requestAuthReducer = createReducer(
  initialState,
  on(AuthActions.requestLogin, (state) => {
    return {...state}
  }),
  on(AuthActions.requestLoginSuccess, (state, action) => {
  return {...state, token: action.token, isAuthorized: true}
  }),
  on(AuthActions.requestLoginFail, state => ({...state, errorMessage: state.errorMessage, isAuthorized: false})),
  /*
  on(AuthActions.requestLogout, state => ({...state})),
  on(AuthActions.requestLogoutSuccess, state => ({...state})),
  on(AuthActions.requestRegister, state => ({...state})),
  on(AuthActions.requestRegisterSuccess, state => ({...state})),
  on(AuthActions.requestRegisterFail, state => ({...state, errorMessage: state.errorMessage }))
  */
);

export const authReducer = (state: AuthState, action: Action): AuthState => requestAuthReducer(state, action);