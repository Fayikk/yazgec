import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/categorymodel';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
//https://localhost:44325/api/Category/Add
//https://localhost:44325/api/Question/GetByCategoryId?id=1
  apiUrl="https://localhost:44325/api"

  getCategory():Observable<ListResponseModel<Category>>{
    return this.httpClient
    .get<ListResponseModel<Category>>(this.apiUrl+"/Category/GetAll")
  }
  add(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/Category/Add",category)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }

  
  

}
