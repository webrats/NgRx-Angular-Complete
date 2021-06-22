import { Optional } from "@angular/core";

export class AuthUser{
    constructor(
        private userid: number ,
        private token:string , 
        private email :string, 
        private expirationDate :Date,
        private role :string


    ){}

    getToken(){
        return this.token ;
    }
    getExpirationDate(){
        return this.expirationDate ; 
    }
}


