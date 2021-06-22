import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post";
 const ADD_POST_ACTION = "[POST page ] add post" ;
 const ADD_POST_SUCCESS_ACTION = "[POST page] add post success" ;
 
 const UPDATE_POST_ACTION = "[POST page ] update post" ;
 const UPDATE_POST_SUCCESS_ACTION = "[POST page ] update post success" ;

 const DELETE_POST_ACTION = "[POST page] delete post " ;
const DELETE_POST_SUCCESS_ACTION = "[POST page] delete post success" ;
 
export  const add_post_action =createAction(ADD_POST_ACTION,props<{post:Post}>()); 
export  const add_post_success_action =createAction(ADD_POST_SUCCESS_ACTION,props<{post:Post}>())

export  const update_post_action =createAction(UPDATE_POST_ACTION,props<{post:Post}>());
export  const update_post_success_action =createAction(UPDATE_POST_SUCCESS_ACTION,props<{post:Post}>());

export const delete_post_action = createAction(DELETE_POST_ACTION,props<{id:Number}>()) 
export const delete_post_success_action = createAction(DELETE_POST_SUCCESS_ACTION,props<{id:Number}>()) 

const LOAD_POSTS_START_ACTION = "[POST page] load posts start"
const LOAD_POSTS_SUCCESS_ACTION = "[POST page] load posts success"
const LOAD_POSTS_FAIL_ACTION = "[POST page] load posts fail"

 export const load_posts_start_action = createAction(LOAD_POSTS_START_ACTION)
 export const load_posts_success_action = createAction(LOAD_POSTS_SUCCESS_ACTION,props<{post:Post[]}>())
export const load_posts_fail_action  = createAction(LOAD_POSTS_FAIL_ACTION)
 