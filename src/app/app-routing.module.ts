import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { CategoryComponent } from './component/category/category.component';
import { CommentAddComponent } from './component/comment-add/comment-add.component';
import { CommentComponent } from './component/comment/comment.component';
import { ImageAddComponent } from './component/image-add/image-add.component';
import { ImageComponent } from './component/image/image.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionAddComponent } from './component/question-add/question-add.component';
import { QuestionComponent } from './component/question/question.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"",component:CategoryComponent},
  {path:"question/add",component:QuestionAddComponent,canActivate:[LoginGuard]},
  {path:"category/add",component:CategoryAddComponent,canActivate:[LoginGuard]},
  {path:"activity",component:QuestionComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"question/detail/:categoryId",component:QuestionComponent}, 
  {path:"comment",component:CommentComponent},
 {path:"detail/:questionId",component:CommentComponent},
 {path:"image",component:ImageComponent},
 {path:"image/add",component:ImageAddComponent},
 {path:"comment/add",component:CommentAddComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
