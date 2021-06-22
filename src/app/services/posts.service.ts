import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { getAuthUser, getToken } from '../auth/state/auth.selectors';
import { AuthUser } from '../models/AuthUser';
import { Post } from '../posts/model/post';
import { getPosts } from '../posts/state/posts.selectors';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  url = "http://localhost:8080/api/v1/post"


  constructor(private httpClient:HttpClient,private store : Store<AppState>) { }



  getAllPost():Observable<Post[]>{
      return this.httpClient.get<Post[]>(`${this.url}`,{responseType : 'json'})
  }

  savePost(post:Post):Observable<Post>{
    console.log(post)
    return this.httpClient.post<Post>(`${this.url}`,post);
  }

  updatePost(post:Post):Observable<Post>{
    return this.httpClient.post<Post>(`${this.url}`+'/'+post.id,post);
  }

  deletePost(id:Number):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}`+'/'+id); 
  }

}
