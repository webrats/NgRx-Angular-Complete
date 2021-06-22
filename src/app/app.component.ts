import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoaderStatus } from './store/shared/shared.seletors';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';



  loaderStatus :Observable<boolean> ;
  errorMessage : Observable<String> ;

  constructor(private store:Store<AppState>){}


  

  ngOnInit(): void {
    this.loaderStatus = this.store.select(getLoaderStatus)

     this.errorMessage = this.store.select(getErrorMessage) 

    this.store.dispatch(autoLogin()) ;
  }
  

  
}
