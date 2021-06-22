import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoaderStatus } from 'src/app/store/shared/shared.actions';
import { signupStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  signupForm : FormGroup;
  password :string ;
 

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        email : new FormControl(null, [Validators.required,Validators.email] ),
      password : new FormControl(null, [Validators.required,Validators.minLength(5)]),
      repassword: new FormControl(null, [Validators.required])
      }
    ) 
  }


  userNameField(){
    const user = this.signupForm.get("email")

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
    const pass = this.signupForm.get("password")
   
    if(pass.touched && pass.invalid){
      if(pass.errors.required){
        return "Password Required";
      }
      if(pass.errors.minLength != 5){
        return "Minimum 5 characters required"
      }
    }
    if(pass.valid){
     this.password = this.signupForm.value.password ;
    
    }

  }
  

  repasswordField(){
    const pass = this.signupForm.get("repassword")
    const p = this.signupForm.value.repassword ;
    if(pass.touched && this.password !=  p){
     
      return "Password not Match"
    }
  }

  onSignup(){
    const email = this.signupForm.value.email
    const password = this.signupForm.value.password
    const role = "ROLE_USER"
    this.store.dispatch(setLoaderStatus({status:true}))
    this.store.dispatch(signupStart({email, password,role}))
  }




}
