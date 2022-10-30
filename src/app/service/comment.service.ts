import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commment } from '../models/comment';
import { ListResponseModel } from '../models/ListResponseModel';
import { QuestionDetailDto } from '../models/questionDetailDto';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
//https://localhost:44325/api/Comment/GetAll
//https://localhost:44325/api/Question/getQuestionDetail?QuestionId=1
//  https://localhost:44325/api/Question/getQuestionDetail?QuestionId=1
apiUrl="https://localhost:44325/api"

getComment():Observable<ListResponseModel<Commment>>{
  return this.httpClient
  .get<ListResponseModel<Commment>>(this.apiUrl+"/Comment/GetAll")
}
  getCommentByQuestion(questionId:number):Observable<SingleResponseModel<QuestionDetailDto>> {
    let newPath = this.apiUrl + "/Question/getQuestionDetail?QuestionId="+questionId
    return this.httpClient.get<SingleResponseModel<QuestionDetailDto>>(newPath);
  }
}
