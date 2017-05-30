/*
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { List } from 'immutable';
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';

import { Flower } from 'app/shared/flower.model';
import { FlowersService } from 'app/shared/flowers.service';

@Injectable()
export class FlowersStore {
  private _flowers: BehaviorSubject<Flower[]>;

  constructor(private flowerService: FlowersService) {
    this._flowers = <BehaviorSubject<Flower[]>> new BehaviorSubject([]);
    this.loadInitialData();
  }

  get flowers() {
    return this._flowers.asObservable();
  }

  loadInitialData() {
    this.flowerService.getAllFlowers()
      .subscribe(response => {
        let flowers = (<Object[]>response).map(flower =>
            new Flower(flower));
        this._flowers.next(flowers);
      });
  }

}
*/