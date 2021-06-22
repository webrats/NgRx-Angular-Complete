import { AuthUser } from "src/app/models/AuthUser";


export interface AuthState {
 user :AuthUser|null ;
}

export const intialState :AuthState = {
    user :null 
}