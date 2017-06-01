import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ClassifiedImage } from './classifiedImage.model';

@Injectable()
export class ClassifiedImagesService {
  private flowers: ClassifiedImage[];

  // Link to our APIs, pointing to localhost
  allImagesAPI = 'http://localhost:3000/allClassifiedImages';

  constructor(private http: Http) { }

  // Get all classified images from the API
  getAllClassifiedImages(): Observable<ClassifiedImage[]> {
    return this.http.get(this.allImagesAPI)
      .map(response => response.json() as ClassifiedImage)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred fetching ClassifiedImage(s)', error); // for demo purposes only
    return Observable.throw(error.json().error || 'Error fetching ClassifiedImage(s)');
  }
}
