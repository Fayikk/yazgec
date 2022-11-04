import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';



@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm : FormGroup
  constructor(private toastrService:ToastrService,
              private categoryService:CategoryService,
              private formBuilder:FormBuilder) { }

  ngOnInit(
          ): void {
              this.createCategoryForm()
          }

  createCategoryForm() {
    this.categoryAddForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      
      categoryName: ['', Validators.required],
      categoryId: ['', Validators.required],
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla ilgilenmektedir.
    });
  }
  add(){
    if(this.categoryAddForm.valid){
      let categoryModel = Object.assign({},this.categoryAddForm.value)
      this.categoryService.add(categoryModel).subscribe(response=>{
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
