import { Component, Input, OnInit } from '@angular/core';

import { ClassifiedImage } from 'app/shared/classifiedImage.model';

@Component({
  selector: 'app-classified-image',
  templateUrl: './classified-image.component.html',
  styleUrls: ['./classified-image.component.css']
})
export class ClassifiedImageComponent implements OnInit {
  @Input() image: ClassifiedImage;

  constructor() { }

  ngOnInit() {
  }

}
