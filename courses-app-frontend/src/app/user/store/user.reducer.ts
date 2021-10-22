import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export interface UserState {
  isAdmin: boolean;
  name: string;
}

const initialState: UserState = {
  isAdmin: false,
  name : ''
}

const requestCurrentUserReducer = createReducer(
  initialState,
  on(requestCurrentUser, (state) => state),
  on(requestCurrentUserFail, (state, action) => ({...state, errorMessage: action.message })),
  on(requestCurrentUserSuccess, (state, action) => {
     //return {...state, name: action.name, isAdmin: state.isAdmin}
     return {...state, user: action.user}
  }
  ));

export const userReducer = (state: UserState, action: Action): UserState => requestCurrentUserReducer(state, action)
export const userFeatureKey = 'user';

