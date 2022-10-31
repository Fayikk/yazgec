import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/ListResponseModel';
import { QuestionDetailDto } from '../models/questionDetailDto';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }
  //https://localhost:44325/api/QuestionImage/GetAll
  //https://localhost:44325/api/Question/getQuestionDetail?QuestionId=1
  apiUrl:"https://localhost:44325/api/Question/GetAll"
  servicePath:"https://localhost:44325/api/"
  getImages():Observable<ListResponseModel<Image>>{
    return this.httpClient
    .get<ListResponseModel<Image>>(this.apiUrl)
  }
  

    getImageByDetail(questionId:number):Observable<SingleResponseModel<QuestionDetailDto>>{
        let newPath = this.apiUrl +"Question/getQuestionDetail?QuestionId="+questionId
        return this.httpClient.
        get<SingleResponseModel<QuestionDetailDto>>(newPath)
        //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
      } 
}
