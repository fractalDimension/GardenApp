import { Component, OnInit } from '@angular/core';

import { PostsService } from 'app/shared/posts.service';
import { Post } from 'app/shared/post.model';

@Component({
  selector: 'app-fake-posts',
  templateUrl: './fake-posts.component.html',
  styleUrls: ['./fake-posts.component.css']
})
export class FakePostsComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
