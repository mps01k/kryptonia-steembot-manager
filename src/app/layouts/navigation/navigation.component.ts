import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/manager/auth.service';
import { PostsComponent } from './../../pages/posts/posts.component';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  search_value: string;
  field: string;
  url: string;
  url_arr: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private authService: AuthService,
    private postsComponent: PostsComponent
  ) {
    this.search_value = this.route.snapshot.queryParamMap.get('value');
  }

  ngOnInit() {
  }

  search() {
    if (this.search_value !== null) {
      if (this.search_value.length > 0) {
        this.url = this.router.url;
        this.url = this.url.substring(1);
        this.url_arr = this.url.split('/');
        this.field = this.url_arr[0];
        if (this.field.indexOf('result') >= 0) {
          const to_rem = 'result?field=';
          this.field = this.field.substring(to_rem.length);
          this.field = this.field.substring(0, this.field.indexOf('&'));
          console.log(this.field, this.search_value);
        }
        this.router.navigate(['/result'], { queryParams: { field: this.field, value: this.search_value }, skipLocationChange: true });
      } else {
        if (this.field === 'posts') {
          this.router.navigate(['/posts/voted']);
        } else {
          this.router.navigate(['/voting-history']);
        }
      }
    } else {
      if (this.field === 'posts') {
        this.router.navigate(['/posts/voted']);
      } else {
        this.router.navigate(['/voting-history']);
      }
    }
  }

  input(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  }

  logout() {
    this.authService.logout(function (res) {
      this.router.navigate(['/manager']);
    });
  }
}
