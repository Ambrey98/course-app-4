import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(requestCurrentUser),
    exhaustMap(() => this.userService.get().pipe(
      map(newUser => {
        console.log(newUser);
      return requestCurrentUserSuccess(newUser)
      }),
      catchError((errorResponse) => {
        console.log('error - requestCurrentUser');
        return of(requestCurrentUserFail({message: errorResponse}));
      })
    ))
  ));

  constructor(private actions$: Actions, private userService: UserService) {}

}

