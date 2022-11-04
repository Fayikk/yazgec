import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commment } from 'src/app/models/comment';
import { CommentDetail } from 'src/app/models/commentDetail';
import { Image } from 'src/app/models/imagee';
import { QuestionDetailDto } from 'src/app/models/questionDetailDto';
import { QuestionDto } from 'src/app/models/questionDto';
import { Question } from 'src/app/models/questionmodel';
import { CommentService } from 'src/app/service/comment.service';
import { ImageService } from 'src/app/service/image.service';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  // detailDto:Any
  comments:Commment[]=[]
  detailDto:QuestionDetailDto
  commentDto:CommentDetail[]=[]
  questions:Question[]=[]
  // questionDto:QuestionDto


  constructor(private toastrService:ToastrService,
              private activatedRoute:ActivatedRoute,
              private commentService:CommentService,
              private imageService:ImageService,
              private questionService:QuestionService) { }
    apiUrl:string="https://localhost:44325/uploads/images/"
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["questionId"]){
        this.getCommentByQuestion(params["questionId"])
        // this.getCommentByFull(params["questionId"])
      }else{
        this.getComment()
      }
    })
  }
  getComment(){
    this.commentService.getComment()
    .subscribe(Response=>{
      this.comments=Response.data
      // console.log(Response.data)
     });
  }
  getCommentByQuestion(questionId:number){
    this.commentService.getCommentByQuestion(questionId)
    .subscribe(response=>{this.detailDto=response.data;
  
   });
   
   }

  //  getCommentByFull(questionId:number){
  //   this.commentService.getCommentByFull(questionId)
  //   .subscribe(response=>{this.detailDto=response.data})

  // }
   
}
