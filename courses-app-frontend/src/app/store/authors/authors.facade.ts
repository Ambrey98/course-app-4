import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Author } from "src/app/models/author";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

Injectable()
export class AuthorsStateFacade {

  constructor(private store: Store<AuthorsState>) {}

  addedAuthor$ = this.store.pipe(select(getAddedAuthors));
  authors$ = this.store.pipe(select(getAuthors));

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor(author));
  }


}