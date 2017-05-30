import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
  // directives: [NgbdProgressbarBasicComponent]
})
export class ImageUploaderComponent implements OnInit {
  progress: number;
  defaultImageUrl: string;

  constructor() {
    this.progress = 75;
    this.defaultImageUrl = 'https://image.freepik.com/free-icon/lotus-flower_318-37271.jpg';
  }

  ngOnInit() {
  }

}
