import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthResponseData } from 'src/app/models/auth-response-data';
import { SessionStorageService } from './session-storage.service';

interface LoginUserResponse {
  result: string;
  successful : boolean;
  user: {
    email: string;
    name: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this.isAuthorized$$.asObservable();
  redirectUrl: string | null = null;
  currentUserValue: any = {};

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) {}

  /*
  login(user: {email: string, password: string}) {
      this.http.post<LoginUserResponse>('http://localhost:3000/api/login', {email: user.email, password: user.password})
      .subscribe((currUser) => {
        this.sessionStorageService.setToken(currUser.result);
        this.currentUserValue = currUser;
        this.isAuthorized$$.next(currUser.successful);
        return currUser;
    });
  }
  */
 
  login(user: {email: string, password: string}): Observable<LoginUserResponse> {
    return this.http.post<LoginUserResponse>('http://localhost:3000/api/login', {email: user.email, password: user.password});
  }

  logout() {
    return this.http.delete<any>('http://localhost:3000/api/logout').subscribe(() => {
      this.sessionStorageService.deleteToken();
    });
  }

  register() {}
}
