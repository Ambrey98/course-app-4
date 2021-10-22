import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { SessionStorageService } from "../services/session-storage.service";
import { requestLogin, requestLoginFail, requestLoginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

  $login = createEffect(() => {
    return this.action$.pipe(
      ofType(requestLogin),
      exhaustMap((action) => {
        return this.authService.login({email: action.email, password: action.password}).pipe(
          map((data) => {
            this.sessionStorageService.setToken(data.result);
            return requestLoginSuccess(data.result);
          }),
          catchError(error => {
            return of(requestLoginFail({message: error}));
          })
        )
      }));
  });
  constructor(private action$: Actions, private authService: AuthService, private sessionStorageService: SessionStorageService) {}
}