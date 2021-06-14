import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Post } from '../model/post';
import { delete_post_action } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts :Observable<Post[]>
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.posts  = this.store.select(getPosts) ;
  }

  deletePost(id: Number){
    this.store.dispatch(delete_post_action({id}));
  }

}
