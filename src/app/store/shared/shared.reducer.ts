import { createReducer, on } from "@ngrx/store";
import { setErrorMessage, setLoaderStatus } from "./shared.actions";
import { intialState } from "./shared.state";

const _sharedReducer = createReducer(intialState,
    on(setLoaderStatus,(state,action)=>{
    return{
        ...state,
        status:action.status 
    }
}),on(setErrorMessage,(state,action)=>{
    return {
        ...state,
        errorMessage:action.message 
    }
})

)

export function sharedReducer(action,state){
    return _sharedReducer(action,state);
}