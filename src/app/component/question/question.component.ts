import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDetail } from 'src/app/models/quesitonDetail';
import { QuestionDetailDto } from 'src/app/models/questionDetailDto';
import { Question } from 'src/app/models/questionmodel';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions:Question[]=[]
  filterText="";
  questionDetail:QuestionDetail
  questionDetailDto:QuestionDetailDto
  dataLoaded=false;

  constructor(private questionService:QuestionService,private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getQuestionByCategory(params["categoryId"])
      }else{
        this.getQuestion()
      }
    })
  }
  getQuestion(){
   
    this.questionService.getQuestion()
  
    .subscribe(Response=>{this.questions=Response.data});
    
  }
  getQuestionByCategory(categoryId:number){

    this.questionService.getQuestionByCategory(categoryId)
    .subscribe(response=>{this.questions=response.data;
   });
  this.dataLoaded=false;
   
   }
 
}
