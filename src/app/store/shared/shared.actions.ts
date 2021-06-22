import { createAction, props } from "@ngrx/store";

 const SET_LOADER_ACTION = "[Shared store]  set loading status" ;

 const SET_ERROR_MESSAGE = "[Shared store] set error message" ;

export const setLoaderStatus = createAction(SET_LOADER_ACTION,props<{status :boolean}>()) ;

export const setErrorMessage = createAction(SET_ERROR_MESSAGE,props<{message :string}>())