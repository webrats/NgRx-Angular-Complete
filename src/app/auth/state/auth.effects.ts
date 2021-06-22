import { AuthService } from './../../services/auth.service';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { autoLogin, autoLogout, loginFail, loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoaderStatus } from 'src/app/store/shared/shared.actions';
import {  of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions, 
    private authService: AuthService , 
    private store :Store<AppState>,
    private router :Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.loginUser(action.email, action.password).pipe(
          map((data) => {
            // success
            
            this.store.dispatch(setLoaderStatus({status:false}))
            this.store.dispatch(setErrorMessage({message:""}))
             const user = this.authService.formateAuthUser(data) ;
             this.authService.saveUserToLocalStorage(user);
            return loginSuccess({user,redirect:true});
          }),
          catchError((errRes) => {
              //fail / error 
              this.store.dispatch(setLoaderStatus({status:false}))
            console.log(errRes.error.error)
            
            return of(setErrorMessage({message:"Bad Credentials"}));
          })
        );
      })
    );
  });

  


  signup$ = createEffect(() => {
    return this.actions$.pipe(ofType(signupStart),exhaustMap((action)=>{
      return this.authService.saveUser(action.email , action.password ,action.role).pipe(
        map((data) => {
          this.store.dispatch(setLoaderStatus({status:false}))
          this.store.dispatch(setErrorMessage({message:""}))
          return signupSuccess();
        }),
        catchError((error)=>{
           console.log(error)
          this.store.dispatch(setLoaderStatus({status:false}))
          return of((setErrorMessage({message:"Email ALready Exist !! Try with another"})) )
        })
      )
    }))
  });


  loginRedirect$ = createEffect(()=>{
    return this.actions$.pipe(ofType(loginSuccess),
    tap((action)=>{
      if(action.redirect){
        this.router.navigate(['/'])
      }
      
    }))
  },{dispatch:false});


  signupRedirect$ = createEffect(()=>{
    return this.actions$.pipe(ofType(signupSuccess),
    tap(()=>{
      
      this.router.navigate(['/auth/login']);
    }))
  },{dispatch:false});


  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(ofType(autoLogin),map(action=>{
     const user = this.authService.getUserToLocalStorage()
     this.store.dispatch(loginSuccess({user ,redirect:false}))
    
    }))
  },{dispatch:false})

  autoLogout$ = createEffect(() => {
    return this.actions$.pipe(ofType(autoLogout),map(data =>{
      this.authService.logout();
      this.router.navigate(['/auth'])
    })) },{dispatch:false})

}


