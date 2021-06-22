import { state } from "@angular/animations"
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shared.state"

export const SHARED_STATE_NAME = "shared"


const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME)
export const getLoaderStatus = createSelector(getSharedState,state=>{
    return state.status
})

export const getErrorMessage = createSelector(getSharedState,state=>{
    return state.errorMessage 
})

