import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  status: string;
  valid_statuses: string[] = [
    'voted',
    'unvoted',
    'invald-link',
    'low-reputation',
    'old-post',
    'errored',
    'blocked'
  ];
  posts: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    route.params.subscribe(res => {
      this.status = res.status;
      this.getPosts();
    });
  }

  ngOnInit() {
    // console.log(this.status);
    // this.getPosts();
  }

  getPosts() {
    if (this.valid_statuses.indexOf(this.status) >= 0) {
      this.postService.fetchData(this.status).subscribe((res) => {
        if (res.json() !== 'Empty') {
          this.posts = res.json();
        } else {
          this.posts = null;
        }
      });
    } else {
      this.posts = null;
    }
  }

  c_status(status: number) {
    if (status === 0) {
      return 'UNVOTED';
    } else if (status === 1) {
      return 'VOTED';
    } else if (status === 2) {
      return 'INVALID LINK';
    } else if (status === 3) {
      return 'LOW REPUTATION';
    } else if (status === 4) {
      return 'OLD POST';
    } else if (status === 5) {
      return 'ERRORED';
    } else if (status === 6) {
      return 'BLOCKED';
    }
  }

  str_limit(str: string) {
    const limit = 50;
    if (str.length > limit) {
      const len = str.length - limit;
      return '...' + str.substring(len);
    } else {
      return str;
    }
  }
}
