import { createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getName = createSelector(
  (state: UserState) => state.name,
  (name) => name
);

export const isAdmin = createSelector(
  (state: UserState) => state.isAdmin,
  (isAdmin) => isAdmin
)