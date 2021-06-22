import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostGuard } from './guards/post.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'posts', loadChildren:()=> import('./posts/posts.module').then(m=> m.PostsModule) ,canActivate:[PostGuard]},
  { path: 'counter', loadChildren: () => import('./counter1/counter1.module').then(m => m.Counter1Module) },
  { path: 'auth' , loadChildren :()=>import("./auth/auth.module").then(m =>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
