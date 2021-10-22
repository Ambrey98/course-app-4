import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { Author } from "src/app/models/author";
import { AuthorsService } from "src/app/services/authors.service";
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from "./authors.actions";

@Injectable()
export class AuthorsEffects {

  constructor(private authorsService: AuthorsService, private action$: Actions) {}

  getAuthors$ = createEffect(() => this.action$.pipe(
    ofType(requestAuthors),
    exhaustMap(() => this.authorsService.getAll().pipe(
      map(data => {
      return requestAuthorsSuccess({authors: (<any>data).result})
      }),
      catchError((errorResponse) => {
        console.log('error - requestAuthors');
        return of(requestAuthorsFail({message: errorResponse}));
      })
    ))
  ));

  addAuthor$ = createEffect(() => this.action$.pipe(
    ofType(requestAddAuthor),
    concatMap((newAuthor) => this.authorsService.add(newAuthor).pipe(
      map((authorToAdd => {
      return requestAddAuthorSuccess({author: (<Author>authorToAdd)})
      }),
      catchError((errorResponse) => {
        console.log('error - requestAddAuthor');
        return of(requestAddAuthorFail({message: errorResponse}));
      })
    ))
  )));
}