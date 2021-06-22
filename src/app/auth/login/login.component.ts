import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { User } from 'src/app/posts/model/User';
import { loginStart } from '../state/auth.actions';
import {  setErrorMessage, setLoaderStatus } from 'src/app/store/shared/shared.actions';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm :FormGroup ;
 

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userid :new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required ,Validators.minLength(5)])
    })
  }

  onLogin(){
    this.store.dispatch(setErrorMessage({message:""}))
    const user :User  = {
      username : this.loginForm.value.userid,
      password : this.loginForm.value.password
    } 
   const  email  = this.loginForm.value.userid
     const  password = this.loginForm.value.password
     //Loader state set 
     this.store.dispatch(setLoaderStatus({status:true}))
     //login
    this.store.dispatch(loginStart({email, password})) 
   
  
 
      }

  userNameField(){
    const user = this.loginForm.get("userid")
    if(user.touched && user.invalid){
      if(user.errors.required){
        return "User id Required";
      }
      if(user.errors.email){
        return "Invalid Email"
      }
    }
  }
  passwordField(){
    const pass = this.loginForm.get("password")
    if(pass.touched && pass.invalid){
      if(pass.errors.required){
        return "User id Required";
      }
      if(pass.errors.minLength != 5){
        return "Minimum 5 characters required"
      }
    }

  }

  

  
}
