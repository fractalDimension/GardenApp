import { Component, OnInit } from '@angular/core';

import { Flower } from 'app/shared/flower.model';
import { FlowersService } from 'app/shared/flowers.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css'],
  providers: [FlowersService]
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[];

  constructor(private flowersService: FlowersService) { }

  ngOnInit() {
    this.getFlowers();
  }

  addDummyFlower() {
    console.log('clicked add flower');
    const dummy: Flower = {
      common_name: 'arroyo lupine',
      sci_name: 'lupinus succulentus',
      wiki_link: 'wwww.google.com',
      in_garden: true
    };
    this.flowersService.addFlower(dummy).subscribe(() => {
      this.getFlowers();
    });
  }

  getFlowers() {
    this.flowersService.getAllFlowers().subscribe(flowers => {
      console.log('subscribed in flower list');
      this.flowers = flowers;
    });
  }

}
