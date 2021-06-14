import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userid :new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required ,Validators.minLength(5)])
    })
  }

  onLogin(){
    console.log(this.loginForm.value)
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
