import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateFacade } from '../store/auth.facade';
import { select, Store } from '@ngrx/store';
import { getToken } from '../store/auth.selectors';
import { first, mergeMap } from 'rxjs/operators';
import { SessionStorageService } from '../services/session-storage.service';
import { AuthState } from '../store/auth.reducer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    private authStateFacade: AuthStateFacade,
    private sessionStorageService: SessionStorageService,
    private store: Store<AuthState>) {
    //this.authStateFacade.setAuthorization();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
    let currentUser: any = null;
    this.authService.isAuthorized$.subscribe(value => {
      if (value) {
        currentUser = this.authService.currentUserValue;
      }
      if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: currentUser.result
          }
        });
      }
    });
    */

    /*
    return this.addToken(request).pipe(
      first(),
      mergeMap((requestWithToken: HttpRequest<any>) => { 
        return next.handle(requestWithToken);
      })
    );
    return next.handle(request);
    */
    // TODO handle errors

    return this.store.select(getToken).pipe(
      first(),
      mergeMap(token => {
        console.log(token);
        const authReq = !!token ? request.clone({
          setHeaders: { Authorization: token },
        }) : request;
        return next.handle(authReq);
      })
    )
    
  }

  /*
  private addToken(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    return this.authStateFacade.getToken$.pipe(
      mergeMap(token => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: token
            }
          });
        }
        return of(request);
      })
    )
  };
  */
}
