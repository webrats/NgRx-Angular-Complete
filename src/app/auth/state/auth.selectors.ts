import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth' ;

const getAuthState = createFeatureSelector<AuthState >(AUTH_STATE_NAME);

export const getAuthUser = createSelector(getAuthState,state =>{
   
return state.user !=null ? state.user:null  ;
}
)
export const getAuthUserState = createSelector(getAuthState,state =>{
   
    return state.user != null ? true:false ;
    }
)
export const getToken = createSelector(getAuthState,state =>{
    return state.user != null ?state.user.getToken() :null  ;
})