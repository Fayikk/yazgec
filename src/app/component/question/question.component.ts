import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private questionService:QuestionService,private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getQuestion()
    
  }
  getQuestion(){
   
    this.questionService.getQuestion()
  
    .subscribe(Response=>{this.questions=Response.data});
    
  }

}
