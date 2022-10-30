import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/service/image.service';




@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  images:Image[]=[]
  constructor(private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private imageService:ImageService) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(){
    this.imageService.getImage()
    .subscribe(Response=>{this.images=Response.data});
  }
}
