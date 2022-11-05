import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categorymodel';
import { Question } from 'src/app/models/questionmodel';
import { CategoryService } from 'src/app/service/category.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[]
  questions:Question[]=[]
  constructor(private categoryService:CategoryService,private activatedRoute:ActivatedRoute,
              private questionService:QuestionService) { }

  ngOnInit(): void {
    this.getCategory()
   
  }
  getCategory(){
    this.categoryService.getCategory()
    .subscribe(Response=>{this.categories=Response.data});
  }

  getQuestionCount(categoryId:number){

    this.questionService.getQuestionCount(categoryId)
    .subscribe(response=>{this.questions=response.data;
   });

   
   }
  
}
