import { Component, OnInit } from '@angular/core';

import { ClassifiedImage } from 'app/shared/classifiedImage.model';
import { ClassifiedImagesService } from 'app/shared/classifiedImages.service';

@Component({
  selector: 'app-classified-images-list',
  templateUrl: './classified-images-list.component.html',
  styleUrls: ['./classified-images-list.component.css']
})
export class ClassifiedImagesListComponent implements OnInit {
  classifiedImages: ClassifiedImage[];

  constructor(private classifiedImagesService: ClassifiedImagesService) { }

  ngOnInit() {
    this.getAllClassifiedImages();
  }

  // TODO make this async in results on flower upload
  getAllClassifiedImages() {
    this.classifiedImagesService.getAllClassifiedImages().subscribe(classifiedImages => {
      console.log('subscribed in classifiedImages list');
      this.classifiedImages = classifiedImages;
    });
  }

}
