import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { getName, isAdmin } from "./user.selectors";
import { UserState } from "./user.reducer";

@Injectable()
export class UserStateFacade {

  constructor(private store: Store<UserState>) {}
  
  public name$ = this.store.pipe(select(getName));
  public isAdmin$ = this.store.pipe(select(isAdmin));

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }

  
}