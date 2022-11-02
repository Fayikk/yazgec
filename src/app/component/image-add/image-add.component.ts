import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { ImageAddService } from 'src/app/service/image-add.service';
import { ImageService } from 'src/app/service/image.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  imageAddForm:FormGroup
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  // imageAddForm:FormGroup

  constructor(private toastrService:ToastrService,
              private imageService:ImageService,
              private imageAddService:ImageAddService,
              private formBuilder:FormBuilder) {
                
               }

  ngOnInit(): void {
    // this.fileInfos = this.imageAddService.getFiles();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.imageAddService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.imageAddService.getFiles();
              
            }
      

          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.toastrService.error("Başarısız");
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }
}


