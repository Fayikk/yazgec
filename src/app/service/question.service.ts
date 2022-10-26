import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Question } from '../models/questionmodel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44325/api"
  
  //apiUrl:"https://localhost:44325/api/Question/Add"
  getQuestion():Observable<ListResponseModel<Question>>{
    return this.httpClient
    .get<ListResponseModel<Question>>(this.apiUrl+"/Question/GetAll")
  }
  add(question:Question):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/Question/Add",question)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }
}
