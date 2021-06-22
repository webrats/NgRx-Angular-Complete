
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { autoLogout } from '../auth/state/auth.actions';
import { AuthResponse } from '../models/AuthResponse.model';
import { AuthUser } from '../models/AuthUser';
import { AppState } from '../store/app.state';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginPath="http://localhost:8080/authenticate";
  signupPath = "http://localhost:8080/register"

  timeoutInterval :any ;


  constructor(private httpClient: HttpClient,private store : Store<AppState>) { }

  loginUser(username:String,password:String): Observable<AuthResponse>{
    return  this.httpClient.post<AuthResponse>(`${this.loginPath}`,{username,password},{ responseType:'json' });
  }

  formateAuthUser(data:AuthResponse){
    const expirationDate =  new Date(new Date().getTime() +data.expirationDateInMs )
    const userid:number = data.id ;
    const user = new AuthUser(userid,data.token,data.email,expirationDate,data.role) 
    return user ;
  }

  saveUser(username:String,password:String,role:string) :Observable<any>{
    return this.httpClient.post<any>(`${this.signupPath}`,{username,password,role},{ responseType:'json' })
  }

  saveUserToLocalStorage(user:AuthUser) {
    localStorage.setItem("userData", JSON.stringify(user))

    this.runTimeOutInterval(user)
  }

  runTimeOutInterval(user:AuthUser) {
    const curentTime = new Date().getTime() ;
    const expirationTime = user.getExpirationDate().getTime();
    const validity = expirationTime - curentTime ; 
    this.timeoutInterval = setTimeout(() => {
      // logout functionality / refresh token 
      this.store.dispatch(autoLogout())
    }, validity);
  }

  getUserToLocalStorage():AuthUser {
   const userStringData =  localStorage.getItem("userData");
   if(userStringData){
     const userJsonData  = JSON.parse(userStringData)
     const expirationDate = new Date(userJsonData.expirationDate)
    const user = new AuthUser(userJsonData.userid,userJsonData.token ,userJsonData.email,expirationDate ,userJsonData.role);
    this.runTimeOutInterval(user);
    return user ;
   }
   return null ;
  }

  logout(){
    localStorage.removeItem('userData');
    if(this.timeoutInterval){
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null ; 
    }
    
  }
  
}
