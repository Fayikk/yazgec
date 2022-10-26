import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/service/question.service';



@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
  questionAddForm : FormGroup

  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private questionService:QuestionService) { }

  ngOnInit(): void {
    this.createProductForm()
  }
  createProductForm() {
    this.questionAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      // id: ['', Validators.required], //burada propertynin default değeri boş olsun ve valiator'ın gerekli olduğunu bildiriyoruz.
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      title: ['', Validators.required],
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla ilgilenmektedir.
    });
  }
  add(){
    if(this.questionAddForm.valid){
      let questionModel = Object.assign({},this.questionAddForm.value)
      this.questionService.add(questionModel).subscribe(response=>{
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
