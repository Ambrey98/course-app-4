import { Action, createReducer, on } from "@ngrx/store";
import { Author } from "src/app/models/author";
import * as AuthorsActions from "./authors.actions"

export const authorsFeatureKey = "authors";

export interface AuthorsState {
  authors: Author[],
  addedAuthor: Author
}

const initialState: AuthorsState = {
  authors: [],
  addedAuthor: {
    name : '',
    id : ''
  }
}

const reducer = createReducer(
  initialState,
  on(AuthorsActions.requestAuthorsSuccess, (state, action) => ({...state, authors: action.authors})),
  on(AuthorsActions.requestAddAuthorSuccess, (state, newAuthor) => ({...state, author: newAuthor }))
)

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);