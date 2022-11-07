import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/imagee';
import { QuestionDetailDto } from 'src/app/models/questionDetailDto';
import { ImageService } from 'src/app/service/image.service';




@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  images:Image[]=[]
  detailsDto:QuestionDetailDto
  title:string="this is trying text"
  constructor(private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private imageService:ImageService
              ) { }

  ngOnInit(): void {
    this.getImages()
  }

  //https://localhost:44340/uploads/images/0724ebbb-bb59-4793-8416-136482681080.jpg
serviceApi:"https://localhost:44340/uploads/images/"
getImages(){
  this.imageService.getImages()
  .subscribe(Response=>{this.images=Response.data});
  
}

  getImageByDetail(questionId:number){

    this.imageService.getImageByDetail(questionId)
    .subscribe(response=>{this.detailsDto=response.data;
   });
   
   }
}
