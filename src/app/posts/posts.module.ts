import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PostGuard } from "../guards/post.guard";
import { HomeComponent } from "../home/home.component";
import { CreateComponent } from "./create/create.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostEffect } from "./state/posts.effects";
import { postReducer } from "./state/posts.reducer";
import { UpdateComponent } from "./update/update.component";

const routes :Routes = [
    {path:"" , component :PostsListComponent ,
    children: [{path:'create',component: CreateComponent},
    {path:'update/:id',component: UpdateComponent}]  
}
]

@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule ,
    EffectsModule.forFeature([PostEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature("posts",postReducer)
    ],
    declarations: [
    HomeComponent,
    PostsListComponent,
    CreateComponent,
    UpdateComponent,
   
    ]
})

export class PostsModule{

}