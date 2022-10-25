import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Question } from '../models/questionmodel';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:7076/api/Question/GetAll"
  getQuestion():Observable<ListResponseModel<Question>>{
    return this.httpClient
    .get<ListResponseModel<Question>>(this.apiUrl)
  }
}
