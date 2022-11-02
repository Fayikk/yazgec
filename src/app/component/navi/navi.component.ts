import { Component, OnInit } from '@angular/core';
import { QuestionDetailDto } from 'src/app/models/questionDetailDto';
import { Question } from 'src/app/models/questionmodel';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  details:QuestionDetailDto[]=[]
  comment:Comment
  questions:Question[]=[]

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }
  // getQuestion(){
   
  //   this.questionService.getQuestion()
  
  //   .subscribe(Response=>{this.question=Response.data});
    
  // }
}
