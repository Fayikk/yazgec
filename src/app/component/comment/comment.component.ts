import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commment } from 'src/app/models/comment';
import { QuestionDetailDto } from 'src/app/models/questionDetailDto';
import { CommentService } from 'src/app/service/comment.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:Commment[]=[]
  detailDto:QuestionDetailDto
  
  constructor(private toastrService:ToastrService,
              private activatedRoute:ActivatedRoute,
              private commentService:CommentService,
              private imageService:ImageService) { }
    imagee:string="https://localhost:44325/uploads/images/"
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["questionId"]){
        this.getCommentByQuestion(params["questionId"])
      }else{
        this.getComment()
      }
    })
  }
  getComment(){
    this.commentService.getComment()
    .subscribe(Response=>{this.comments=Response.data});
  }
  getCommentByQuestion(questionId:number){

    this.commentService.getCommentByQuestion(questionId)
    .subscribe(response=>{this.detailDto=response.data;
   });
   
   }
   
}
