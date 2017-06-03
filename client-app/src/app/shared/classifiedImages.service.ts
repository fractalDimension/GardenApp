/*
https://www.lucidchart.com/techblog/2016/11/08/angular-2-and-observables-data-sharing-in-a-multi-view-application/
*/

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

import { ClassifiedImage } from './classifiedImage.model';

@Injectable()
export class ClassifiedImagesService {
  // Link to our APIs, pointing to localhost
  private allImagesAPI = 'http://localhost:3000/allClassifiedImages';
  private _classifiedImages = <BehaviorSubject<ClassifiedImage[]>>new BehaviorSubject([]);
  private fetching: boolean;

  constructor(private http: Http) { }

  private getAllClassifiedImages() {
    return this._classifiedImages.asObservable();
  }

  /*
   * awaitData() and refresh() ensure components have data on init and listen for changes
   */
  awaitData() {
    if ( !this.isEmpty(this._classifiedImages) && !this.fetching ) {
      this.refresh();
    }
    return this.getAllClassifiedImages();
  }
  refresh() {
    this.fetching = true;
    this.getAllImages().subscribe(images => {
      this.fetching = false;
      this._classifiedImages.next(images);
    }, err => {
      this.fetching = false;
      this._classifiedImages.error(err);
    });
  }

  // Get all classified images from the API
  private getAllImages(): Observable<ClassifiedImage[]> {
    return this.http.get(this.allImagesAPI)
      .map(response => response.json() as ClassifiedImage[])
      .catch(this.handleError);
  }

  // Get single classified image data by image name
  getClassifiedImageData(): Observable<any> {
    return this.http.get(this.allImagesAPI)
      .map(response => response.json() as ClassifiedImage)
      .catch(this.handleError);
  }

  /* helper functions */

  private handleError(error: any): Observable<any> {
    console.error('An error occurred fetching ClassifiedImage(s)', error); // for demo purposes only
    return Observable.throw(error.json().error || 'Error fetching ClassifiedImage(s)');
  }

  private isEmpty(val) {
    return ( val.getValue().length > 0 );
}
}
