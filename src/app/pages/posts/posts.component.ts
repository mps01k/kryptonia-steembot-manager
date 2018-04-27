import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  status: string;

  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe(res => this.status = res.status);
  }

  ngOnInit() {
    console.log(this.status);
  }

}
