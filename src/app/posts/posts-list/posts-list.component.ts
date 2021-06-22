import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoaderStatus } from 'src/app/store/shared/shared.actions';
import { Post } from '../model/post';
import { delete_post_action, load_posts_start_action } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit ,OnDestroy {


  posts :Post[] ;
  OnDestroyUnsubscribe :Subscription ;
  constructor(private store : Store<AppState>) { }
 
  ngOnDestroy(): void {
    // Unsubscribeing to the subscription 
    this.OnDestroyUnsubscribe.unsubscribe();
  }

  ngOnInit(): void {
    // getting the data using selector . it return an observable 
    // subscribe to that observable and getting the data
    this.OnDestroyUnsubscribe =this.store.select(getPosts).subscribe(data =>{
      this.posts =data 
   })

   if(!this.posts){
    this.store.dispatch(setLoaderStatus({status:true}))
    this.store.dispatch(load_posts_start_action())
    this.store.dispatch(setLoaderStatus({status:false}))
   }
    
  }

  deletePost(id: Number){
    this.store.dispatch(delete_post_action({id}));
  }

}
