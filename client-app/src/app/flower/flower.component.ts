import { Component, OnInit, Input } from '@angular/core';

import { Flower } from 'app/shared/flower.model';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  @Input() flower: Flower;

  constructor() { }

  ngOnInit() {
  }

}
