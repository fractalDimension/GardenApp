import { Directive, OnInit } from '@angular/core';

import { ClassifiedImagesService } from 'app/shared/classifiedImages.service';

@Directive({
  selector: '[refreshImages]'
})

export class RefreshClassifiedImageListDirective implements OnInit {

  constructor(private classifiedImagesService: ClassifiedImagesService) { }

  ngOnInit() {
    this.classifiedImagesService.refresh();
  }

}
