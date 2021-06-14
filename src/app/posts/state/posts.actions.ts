import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post";
 const ADD_POST_ACTION = "[POST page ] add post" ;
 const UPDATE_POST_ACTION = "[POST page ] update post" ;
 const DELETE_POST_ACTION = "[POST page] delete post " ;

export  const add_post_action =createAction(ADD_POST_ACTION,props<{Post}>()); 
export  const update_post_action =createAction(UPDATE_POST_ACTION,props<{Post}>());
export const delete_post_action = createAction(DELETE_POST_ACTION,props<{id:Number}>()) 