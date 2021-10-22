import { createSelector } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

export const getAddedAuthors = createSelector(
  (state: AuthorsState) => state,
  (author) => author.addedAuthor
);

export const getAuthors = createSelector(
  (state: AuthorsState) => state,
  (author) => author.authors
)