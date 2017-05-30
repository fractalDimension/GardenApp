import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Flower } from './flower.model';

@Injectable()
export class FlowersService {
  private flowers: Flower[];

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000/flowers';

  constructor(private http: Http) { }

  // Get all flowerss from the API
  getAllFlowers(): Observable<Flower[]> {
    return this.http.get(this.API)
      .map(response => response.json() as Flower)
      .catch(this.handleError);
  }

  /*
  // Get flower by name from the API
  getFlowerByName(flowerName: string): Observable<Flower> {
    const apiQuery = this.API + '/' + flowerName;
    return this.http.get(apiQuery)
      					.map(response => response.json() as Flower)
      					.catch(this.handleError);
  }
  */

  // Add flower by the API
  addFlower(flower: Flower): Observable<Flower> {
    console.log('trying to add flower');
    return this.http.post(this.API, flower)
      					.map(response => response.json() as Flower)
      					.catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred fetching flower(s)', error); // for demo purposes only
    return Observable.throw(error.json().error || 'Error fetching flower(s)');
  }
}
