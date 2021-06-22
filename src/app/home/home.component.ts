import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../posts/model/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private postsService :PostsService) { }

  ngOnInit(): void {
  }

  
}
