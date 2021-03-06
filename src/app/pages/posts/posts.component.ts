import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import { PostService } from './../../services/post.service';
import { UtilService } from './../../services/util.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public loading = false;
  status: string;
  valid_statuses: string[] = [
    'voted',
    'pending',
    'invald-link',
    'low-reputation',
    'old-post',
    'error',
    'blocked'
  ];
  posts: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private utilService: UtilService
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
    this.loading = true;
    if (this.valid_statuses.indexOf(this.status) >= 0) {
      this.postService.fetchData(this.status).subscribe((res) => {
        if (res.json() !== 'Empty') {
          this.loading = false;
          this.posts = res.json();
        } else {
          this.loading = false;
          this.posts = null;
        }
      });
    } else {
      this.loading = false;
      this.posts = null;
    }
  }

  c_status(status: number) {
    return this.utilService.post_status(status);
  }

  str_limit(str: string) {
    return this.utilService.str_limit(str);
  }

  permalink(link: string) {
    return this.utilService.permalink(link);
  }

  detail(item_id) {
    this.router.navigate(['/details/' + item_id]);
  }

  task_id(task_id: number) {
    return this.utilService.kryptonia_task_link(task_id);
  }

  author_link(author: string) {
    return this.utilService.author_link(author);
  }
}
