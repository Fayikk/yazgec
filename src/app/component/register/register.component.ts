import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // formBuilder: any;
  constructor(private authService:AuthService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder
              ) { }
  registerForm:FormGroup

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      //ürün eklerke formda olmasını istediğimiz alanları burada configure edeceğiz.
      email: ['', Validators.required], //burada propertynin default değeri boş olsun ve valiator'ın gerekli olduğunu bildiriyoruz.
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      //html'imizde hangi alanlar map edilecek ve o alandaki kurallar nelerdir .
      //Bu alan onunla i lgilenmektedir.
    });
  }

  // register(){
  //   if(this.registerForm.valid){
  //     let registermodel = Object.assign({},this.registerForm.value)
  //     this.authService.register(registermodel).subscribe(response=>{
  //       this.toastrService.success(response.message,"Success")
  //     },responseError=>{
  //       if(responseError.error.Errors.length>0){
  //         for (let i = 0; i <responseError.error.Errors.length; i++) {
  //           this.toastrService.error(responseError.error.Errors[i].ErrorMessage
  //             ,"Validation error")
  //         }       
  //       } 
  //     })
      
  //   }else{
  //     this.toastrService.error("Form doesnt full","Caution")
  //   }
    
  // }
}
