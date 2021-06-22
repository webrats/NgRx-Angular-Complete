import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getToken } from '../auth/state/auth.selectors';

@Injectable()
export class BasicAuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private store:Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token : string ;
    if(request.url != "http://localhost:8080/authenticate"){
      this.store.select(getToken).subscribe(data =>{ 
        token = data ;
      })
    }

    if(token){
      const newToken = "Bearer "+token ;
      request = request.clone({
        setHeaders: {
          Authorization: newToken
        }
      })

    }
 
    
    console.log(request)

    return next.handle(request);
  }
}
