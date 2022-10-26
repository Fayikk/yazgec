import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './component/category/category.component';
import { QuestionComponent } from './component/question/question.component';
import { ActivatedRoute } from '@angular/router';
import { NaviComponent } from './component/navi/navi.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe'//import ediyoruz
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QuestionAddComponent } from './component/question-add/question-add.component';
import {ToastrModule} from "ngx-toastr";
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    NaviComponent,
    VatAddedPipe,
    FilterpipePipe,
    QuestionAddComponent,
    CategoryAddComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
