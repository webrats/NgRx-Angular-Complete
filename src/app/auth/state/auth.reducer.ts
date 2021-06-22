import { createReducer, on } from "@ngrx/store";
import { autoLogout, loginSuccess, signupSuccess} from "./auth.actions";

import { intialState } from "./auth.state";


const _authReducer = createReducer(intialState,
    on(loginSuccess,(state,action)=>{
       
    return{
        ...state,
        user : action.user 
    }
    
}),on(signupSuccess,(state,action)=>{
    console.log("Signup success")
    return {

    }
}),on(autoLogout,(state)=>{
    
    return {
        ...state,
        user :null 
    }
})

);

export function authReducer(state ,action){
    return _authReducer(state, action) ;
}