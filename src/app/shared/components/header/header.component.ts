import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import { getAuthUserState } from 'src/app/auth/state/auth.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthorized: Observable<boolean> ; 
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
     this.isAuthorized =this.store.select(getAuthUserState)
  }

  onLogoutEvent(event:Event){
  event.preventDefault() ;
  this.store.dispatch(autoLogout());
}


}
