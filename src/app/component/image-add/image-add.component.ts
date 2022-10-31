import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  imageAddForm:FormGroup
  constructor(private toastrService:ToastrService,
              private imageService:ImageService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createImageForm();
  }

  createImageForm() {
    this.imageAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      

      questionId: ['', Validators.required],
      imagePath:['',Validators.required,requiredFileType('png')],
     
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla ilgilenmektedir.
    });
  }

  add(){
    if(this.imageAddForm.valid){
      let questionModel = Object.assign({},this.imageAddForm.value)
      this.imageService.add(questionModel).subscribe(response=>{
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


