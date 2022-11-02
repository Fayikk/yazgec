import { HttpClient,HttpEvent,HttpRequest } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/imagee';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageAddService {

  constructor(private httpClient:HttpClient) { }
 Url=" https://localhost:44325/api/QuestionImage/add"
 getUrl="https://localhost:44325/api/QuestionImage/GetAll"
upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.Url}`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.httpClient.request(req);
}


getFiles(): Observable<any> {
  return this.httpClient.get(`${this.getUrl}`);
}

}
