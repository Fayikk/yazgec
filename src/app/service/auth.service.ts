import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//https://localhost:44325/api/Auth/login
//https://localhost:44325/api/Auth/register
  constructor(private httpClient:HttpClient) { }
  apiUrl:'https://localhost:44325/api/Auth/register'
  serviceUrl:"https://localhost:44325/api/Auth/login"
  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.serviceUrl,user)
  }
 

  register(user:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl,user)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}
