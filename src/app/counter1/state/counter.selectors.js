import { createFeatureSelector, createSelector } from "@ngrx/store";

const getCounterState = createFeatureSelector('counter');

export const getDesc = createSelector(getCounterState , state=>{
    return state.desc ; 
}) 
export const getCounter = createSelector(getCounterState , state=>{
    return state.counter ; 
}) 