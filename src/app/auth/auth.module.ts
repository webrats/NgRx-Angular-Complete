import { CommonModule } from "@angular/common";
import {  HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { AuthEffects } from "./state/auth.effects";
import { authReducer } from "./state/auth.reducer";

const routes :Routes = [
    {path :'',redirectTo:'login'},
    {path :'',children:[
        {path :'login' ,component :LoginComponent},
        {path :'signup' ,component :SignupComponent}
    ]}

]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature(),
        RouterModule.forChild(routes),
        StoreModule.forFeature("auth" ,authReducer),                                     
        HttpClientModule,
        FormsModule
    
    ],
    declarations: [LoginComponent, SignupComponent]
})
export class AuthModule{}