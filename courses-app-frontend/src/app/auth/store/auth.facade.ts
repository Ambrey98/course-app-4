import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { mergeMap } from "rxjs/operators";
import { SessionStorageService } from "../services/session-storage.service";
import { requestLogin, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister } from "./auth.actions";
import { AuthState } from "./auth.reducer";
import { getSpecificErrorMessage, getToken, isUserAuthorized } from "./auth.selectors";

@Injectable()
export class AuthStateFacade {

  constructor(private store: Store<AuthState>, private sessionStorageService: SessionStorageService) {}
  
  isAuthorized$ = this.store.pipe(select(isUserAuthorized));
  getToken$ = this.store.pipe(select(getToken));
  getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));
  getRegisterErrorMessage$: any = null; //TODO

  login(user: {email: string, password: string}) {
    this.store.dispatch(requestLogin(user));
  }

  register(user: {name: string, email:string, password: string}) {
    this.store.dispatch(requestRegister(user));
  }

  setAuthorization() {
    const tokenToSet = this.sessionStorageService.getToken();
    if (tokenToSet) this.store.dispatch(requestLoginSuccess(tokenToSet));
  }

  logout() {
    this.store.dispatch(requestLogout());
  }

  closeSession() {
    this.store.dispatch(requestLogoutSuccess({message: 'Successfully logged out'}));
  }

}