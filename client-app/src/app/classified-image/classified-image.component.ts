import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClassifiedImage } from 'app/shared/classifiedImage.model';
import { ClassifiedImagesService } from 'app/shared/classifiedImages.service';

@Component({
  selector: 'app-classified-image',
  templateUrl: './classified-image.component.html',
  styleUrls: ['./classified-image.component.css']
})
export class ClassifiedImageComponent implements OnInit {
  @Input() image: Observable<ClassifiedImage>;

  constructor(private classifiedImagesService: ClassifiedImagesService) { }

  ngOnInit() {
    // console.log(this.image);
  }

  imageSrc( imageId: string ): string {
    return this.classifiedImagesService.getClassifiedImageFilePath( imageId );
  }

}
