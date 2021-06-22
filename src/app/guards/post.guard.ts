import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getAuthUserState } from '../auth/state/auth.selectors';
import { AppState } from '../store/app.state';



@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanActivate ,OnDestroy {
  
  onDestroy : Subscription ;
  status :boolean ;
  constructor(private store : Store<AppState> ,private router : Router){}
  ngOnDestroy(): void {
   this.onDestroy.unsubscribe();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      this.onDestroy = this.store.select(getAuthUserState).subscribe(state =>{
        this.status = state 
      })
      if(!this.status){
        return this.router.createUrlTree(['auth'])
      }
      return true ;
  }
  
}
