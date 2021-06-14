import { createReducer, on } from "@ngrx/store";
import { add_post_action, delete_post_action, update_post_action } from "./posts.actions";
import { intialState } from "./posts.state";



const _postReducer = createReducer(intialState ,
    on(add_post_action , 
        (state,action) =>{
            let post = {...action.Post} ;
            
            post.id = state.posts.length +1 ;
            console.log(post)
            return {
                ...state ,
                posts :[...state.posts,post]
            }
        }
    ),
    on(update_post_action, 
        (state,action) =>{
            let post = {...action.Post} ;

             const updatePosts=state.posts.map(post => action.Post.id== post.id ? action.Post : post )
            
            return {
                ...state ,
                posts :updatePosts 
            }
        }
    ),
    on(delete_post_action, 
        (state,{id}) =>{
           const updatePosts = state.posts.filter(post =>  post.id != id)
            return {
                ...state ,
                posts :updatePosts 
            }
        }
    ) 
    
    );

export const postReducer = (state , action)=>{
    return _postReducer(state, action) ;
}