import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { QuestionDetail } from '../models/quesitonDetail';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient:HttpClient) { }
  // apiUrl="https://localhost:44325/api"

  // getDetails():Observable<ListResponseModel<QuestionDetail>>{
  //   return this.httpClient
  //   .get<ListResponseModel<QuestionDetail>>(this.apiUrl)
  // }

  // getQuestionByDetail(categoryId:number):Observable<SingleResponseModel<QuestionDetail>>{
  //   let newPath = this.apiUrl +"/Question/GetByQuestionDetail?Id="+categoryId
  //   return this.httpClient.
  //   get<SingleResponseModel<QuestionDetail>>(newPath)
  //   //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  // } 
}
