import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "../auth/store/auth.effects";
import * as auth from '../auth/store/auth.reducer';
import * as user from '../user/store/user.reducer';
import * as authors from '../../app/store/authors/authors.reducer';
import { UserEffects } from "../user/store/user.effects";
import { AuthorsEffects } from "./authors/authors.effects";

interface State {}

export const reducers: ActionReducerMap<State> = {
  auth: auth.authReducer,
  user: user.userReducer,
  authors: authors.authorsReducer
};

export const effects: any = [AuthEffects, UserEffects, AuthorsEffects];