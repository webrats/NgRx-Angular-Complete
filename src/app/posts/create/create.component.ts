import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../model/post';
import {  add_post_action } from '../state/posts.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  postForm : FormGroup ;
  
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      desc :new FormControl(null,[Validators.required,Validators.minLength(10)])
    })
  }

  addPost(){
    const post :Post ={
      title : this.postForm.value.title,
      description :this.postForm.value.desc
    };
  
    this.store.dispatch(add_post_action({post}) ) ;

    
  }

description(){
  const desc =  this.postForm.get("desc") ;
  if(desc.touched && desc.invalid){
    if(desc.errors.required){
      return "Description is required "
    }

    if(desc.errors.minlength){
      return "Min length must be 10 characters"
    }
    
  }

  
}


}
