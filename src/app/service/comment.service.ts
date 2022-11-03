import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commment } from '../models/comment';
import { CommentDetail } from '../models/commentDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { QuestionDetailDto } from '../models/questionDetailDto';
import { QuestionDto } from '../models/questionDto';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
//https://localhost:44325/api/Comment/GetAll
//https://localhost:44325/api/Question/getQuestionDetail?QuestionId=2
//https://localhost:44325/api/Comment/getCommentDetail?Questionid=1
apiUrl="https://localhost:44325/api"

getComment():Observable<ListResponseModel<Commment>>{
  return this.httpClient
  .get<ListResponseModel<Commment>>(this.apiUrl+"/Comment/GetAll")
}
  getCommentByQuestion(questionId:number):Observable<SingleResponseModel<QuestionDetailDto>> {
    let newPath = this.apiUrl + "/Question/getQuestionDetail?QuestionId="+questionId
    return this.httpClient.get<SingleResponseModel<QuestionDetailDto>>(newPath);
  }

  getCommentByFull(questionId:number):Observable<SingleResponseModel<QuestionDetailDto>>
  {
    let newPath=this.apiUrl+"/Comment/getCommentDetail?Questionid="+questionId
    return this.httpClient.get<SingleResponseModel<QuestionDetailDto>>(newPath)
  }
}
