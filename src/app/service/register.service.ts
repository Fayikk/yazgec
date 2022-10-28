import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  // https://localhost:44325/api/Auth/register
  apiUrl="https://localhost:44325/api/Auth/"
  add(register:RegisterModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"register",register)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }
}
