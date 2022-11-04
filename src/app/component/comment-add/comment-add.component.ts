import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  commentAddForm:FormGroup
  constructor(private commentService:CommentService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCommentForm()
  }


  createCommentForm(){
    this.commentAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      
      // categoryName: ['', Validators.required],
      theComment: ['', Validators.required],
      questionId:['',Validators.required]
      
    });
  }



  add(){
    if(this.commentAddForm.valid){
      let commentModel = Object.assign({},this.commentAddForm.value)
      this.commentService.add(commentModel).subscribe(response=>{
        this.toastrService.success(response.message,"Success")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Validation error")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Form doesnt full","Caution")
    }
    
  }

}
