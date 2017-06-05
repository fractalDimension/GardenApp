import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { Http, Response } from '@angular/http';
import { ClassifiedImagesService } from 'app/shared/classifiedImages.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(private http: Http, private classifiedImagesService: ClassifiedImagesService, private el: ElementRef) { }

  ngOnInit() {
  }

  upload() {
    // locate the file element meant for the file upload.
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    // get the total amount of files attached to the file input.
    const fileCount: number = inputEl.files.length;
    // create a new fromdata instance
    const formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      // append the key name 'photo' with the first file in the element
      formData.append('file', inputEl.files.item(0));

      this.classifiedImagesService.uploadAndClassify( formData ).subscribe((response) => {
        // TODO use response to change display
        this.classifiedImagesService.refresh();
      });
    }
  }

}
