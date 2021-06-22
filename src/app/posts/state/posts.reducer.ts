import { createReducer, on } from "@ngrx/store";
import { add_post_action, add_post_success_action, delete_post_action, delete_post_success_action, load_posts_success_action, update_post_action, update_post_success_action } from "./posts.actions";
import { intialState } from "./posts.state";



const _postReducer = createReducer(intialState ,
    on(add_post_success_action , 
        (state,{post}) =>{
  
            return {
                ...state ,
                posts :[...state.posts,post]
            }
        }
    ),
    on(update_post_success_action, 
        (state,action) =>{
            

             const updatePosts=state.posts.map(post => post.id== action.post.id? action.post : post )
            console.log(updatePosts)
            return {
                ...state ,
                posts :updatePosts 
            }
        }
    ),
    on(delete_post_success_action, 
        (state,{id}) =>{
           const updatePosts = state.posts.filter(post =>  post.id != id)
            return {
                ...state ,
                posts :updatePosts 
            }
        }
    ),on(load_posts_success_action,(state,{post})=>{
        return{
            ...state,
            posts:post
        }
    }) 
    
    );

export const postReducer = (state , action)=>{
    return _postReducer(state, action) ;
}