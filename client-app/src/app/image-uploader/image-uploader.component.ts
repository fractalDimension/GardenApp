import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/classifyImage'});

  constructor() { }

  ngOnInit() {
  }

}
