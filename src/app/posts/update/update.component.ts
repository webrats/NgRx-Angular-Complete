import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../model/post';
import { update_post_action } from '../state/posts.actions';
import { getPostById } from '../state/posts.selectors';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit ,OnDestroy {

  constructor( private activatedRoute: ActivatedRoute,private store :Store<AppState>) { 
    
  }
  

  updateForm :FormGroup ;
  post :Post ;
  postSubscription :Subscription ;

  ngOnInit(): void {
     let id : Number ;
     this.postSubscription = this.activatedRoute.params.subscribe(data =>{
     
         id= data.id ;
         this.store.select(getPostById , {id}).subscribe(data =>{
  
        
          this.post = data;
          this.updateForm = new FormGroup({ 
            id: new FormControl(this.post.id) , 
            title:new FormControl(this.post.title,[Validators.required]),
            desc :new FormControl(this.post.description,[Validators.required])
          })
        
    })
     })

        

    
  }

  description(){

  }

  updatePost(){
    const post :Post = {
      id :this.updateForm.value.id,
      title : this.updateForm.value.title,
      description :this.updateForm.value.desc 
    }
    this.store.dispatch(update_post_action({post}))
    
    this.updateForm = new FormGroup({ 
      id: new FormControl(null) , 
      title:new FormControl(null),
      desc :new FormControl(null)
    })

    }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe()
  }

}
