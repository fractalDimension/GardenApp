import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-gridfs-upload',
  templateUrl: './gridfs-upload.component.html',
  styleUrls: ['./gridfs-upload.component.css']
})
export class GridfsUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3000/uploadImage'});

  constructor() { }

  ngOnInit() {
  }

}
