import { createAction, props } from "@ngrx/store"
import { AuthUser } from "src/app/models/AuthUser"

export const LOGIN_START = "[auth page] login start"
export const LOGIN_SUCCESS = "[auth page] login success"
export const LOGIN_FAIL = "[auth page] login fail"



export const loginStart = createAction(LOGIN_START, props<{email: String; password: String}>())
export const loginSuccess = createAction(LOGIN_SUCCESS ,props<{user:AuthUser,redirect :boolean}>() )
export const loginFail = createAction(LOGIN_FAIL)

const SIGNUP_ACTION_START = "[auth page] signup start"
const SIGNUP_ACTION_SUCCESS = "[auth page] signup success"

export const signupStart = createAction(SIGNUP_ACTION_START, props<{email: string,password: string,role: string}>())
export const signupSuccess = createAction(SIGNUP_ACTION_SUCCESS )


export const AUTO_LOGIN_ACTION = "[auth page] auto login"
export const AUTO_LOGOUT_ACTION = "[auth page] auto logout"

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const autoLogout = createAction(AUTO_LOGOUT_ACTION);