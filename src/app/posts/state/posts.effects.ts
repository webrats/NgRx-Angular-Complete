import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { PostsService } from "src/app/services/posts.service";
import { AppState } from "src/app/store/app.state";
import { setErrorMessage, setLoaderStatus } from "src/app/store/shared/shared.actions";
import { add_post_action, add_post_success_action, delete_post_action, delete_post_success_action, load_posts_start_action, load_posts_success_action, update_post_action, update_post_success_action } from "./posts.actions";


@Injectable()

export class PostEffect {
    constructor(private actions$ :Actions,
        private postsService :PostsService , 
    private store :Store<AppState>,){}
    

    loadPost$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(load_posts_start_action),
          exhaustMap((action) => {
            return this.postsService.getAllPost().pipe(
              map((post) => {
                // success
                
               // this.store.dispatch(setLoaderStatus({status:false}))
                this.store.dispatch(setErrorMessage({message:""}))
                
                 //this.authService.saveUserToLocalStorage(user);
                return load_posts_success_action({post});
              }),
              catchError((errRes) => {
                  //fail / error 
                  this.store.dispatch(setLoaderStatus({status:false}))
                console.log(errRes.error.error)
                
                return of(setErrorMessage({message:"Some Thing wrong"}));
              })
            );
          })
        );
      });

      addPost$ = createEffect(() => {
        return this.actions$.pipe(
        ofType(add_post_action),
        exhaustMap(({post})=>{
          return this.postsService.savePost(post).pipe(
            map(post=>{
              return add_post_success_action({post})
          }),
          catchError(err=>{
            return of(setErrorMessage({message:"Some Thing wrong"}))
          })
          
          )
        })
        
        )
      });


      updatePost$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(update_post_action),
          exhaustMap(({post}) =>{
            return this.postsService.updatePost(post).pipe(
              map(() => {
                return  update_post_success_action({post}) ;
              }),
              catchError((err)=>{
                return of(setErrorMessage({message:"Some Thing wrong"}))
              })
            )
          })
          )
      })


      deletePost$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(delete_post_action),
          exhaustMap(({id}) =>{
            return this.postsService.deletePost(id).pipe(
              map(() =>{
                  return delete_post_success_action({id})
              }),
              catchError((err) =>{
                return of(setErrorMessage({message:"Some Thing wrong"}))
              })
            );
          })
          );
      });
}