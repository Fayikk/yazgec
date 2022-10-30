import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }
  //https://localhost:44325/api/QuestionImage/GetAll
  apiUrl:"https://localhost:44325/api/QuestionImage/GetAll"

  getImage():Observable<ListResponseModel<Image>>{
      return this.httpClient
      .get<ListResponseModel<Image>>(this.apiUrl)
    }

}
