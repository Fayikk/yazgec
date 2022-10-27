import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor(private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private authService:AuthService
      ) { }
  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })

}

login(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    let loginmodel = Object.assign({},this.loginForm.value)

    this.authService.login(loginmodel).subscribe(response=>{
      this.toastrService.info(response.message)
      localStorage.setItem("token",response.data.token)
    },responseError=>{
      //console.log(responseError)
      this.toastrService.error(responseError.error)
    })
  }
}
}
