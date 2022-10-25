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

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    NaviComponent,
    VatAddedPipe,
    FilterpipePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
