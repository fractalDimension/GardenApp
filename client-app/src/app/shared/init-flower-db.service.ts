import { Injectable, OnInit } from '@angular/core';

import { Flower } from './flower.model';
import { FlowersService } from './flowers.service';

@Injectable()
export class InitFlowerDbService implements OnInit  {
  FLOWERS: Flower[] = [
    { common_name: 'arroyo lupine', sci_name: 'lupinus succulentus', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'five spot', sci_name: 'nemophila maculata', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'yellow lupine', sci_name: 'lupinud dendiflorus', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'baby blue eyes', sci_name: 'nemophila menzeisii', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'chinese houses', sci_name: 'collinsia heterophylla', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'California Poppy', sci_name: 'eschscholzia californica', wiki_link: 'wwww.google.com', in_garden: true },
    { common_name: 'California Bluebell', sci_name: 'phacelia campanularia', wiki_link: 'wwww.google.com', in_garden: true },
  ];

  initFlowers: Flower[];

  constructor(private flowersService: FlowersService) { }

  ngOnInit() {
    // Check to see if entries present and if not, initialize
    this.checkFlowers();
  }

  checkFlowers() {
    this.flowersService.getAllFlowers().subscribe(flowers => {
      if (flowers.length < 1) {
        console.log('Flowers at start up. Adding entries.');
        this.FLOWERS.map(flower => {
          this.flowersService.addFlower(flower).subscribe(() => {
            this.getFlowers();
          });
        });
      }
    });
  }

  getFlowers() {
    this.flowersService.getAllFlowers().subscribe(flowers => {
      this.initFlowers = flowers;
    });
  }
}
