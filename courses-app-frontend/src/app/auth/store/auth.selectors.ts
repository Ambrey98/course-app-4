import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const isUserAuthorized = createSelector(
  (state: AuthState) => state.isAuthorized,
  (isAuthorized: boolean) => isAuthorized
);

export const getToken = createSelector(
  (state: AuthState) => state.token,
  (token: string) => token
);

export const getSpecificErrorMessage = createSelector(
  (state: AuthState) => state.errorMessage,
  (errorMessage) => errorMessage
);