import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClassifiedImage } from 'app/shared/classifiedImage.model';
import { ClassifiedImagesService } from 'app/shared/classifiedImages.service';

@Component({
  selector: 'app-classified-images-list',
  templateUrl: './classified-images-list.component.html',
  styleUrls: ['./classified-images-list.component.css']
})
export class ClassifiedImagesListComponent implements OnInit {
  // TODO pipe this data directly into the html
  classifiedImages: Observable<ClassifiedImage[]>;

  constructor(private classifiedImagesService: ClassifiedImagesService) { }

  ngOnInit() {
    this.classifiedImages = this.classifiedImagesService.awaitData();
  }


}
