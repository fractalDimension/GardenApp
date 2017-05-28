import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Post } from './post.model';

@Injectable()
export class PostsService {

	// Link to our api, pointing to localhost
  API = 'http://localhost:3000/posts';

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(): Observable<Post[]> {
    return this.http.get(this.API)
      					.map(response => response.json() as Post[])
      					.catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred fetching posts', error); // for demo purposes only
    return Observable.throw(error.json().error || 'Error fetching posts');
  }
}
