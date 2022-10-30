import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { CategoryComponent } from './component/category/category.component';
import { LoginComponent } from './component/login/login.component';
import { QuestionAddComponent } from './component/question-add/question-add.component';
import { QuestionComponent } from './component/question/question.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"category",component:CategoryComponent},
  {path:"",component:QuestionComponent},
  {path:"question/add",component:QuestionAddComponent},
  {path:"category/add",component:CategoryAddComponent,canActivate:[LoginGuard]},
  {path:"activity",component:QuestionComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"question/detail/:categoryId",component:QuestionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
