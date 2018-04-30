import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  status_int: number;
  env = environment;

  constructor(private http: Http) { }

  searchPost(status: string, search: string) {
    if (status === 'unvoted') {
      this.status_int = 0;
    } else if (status === 'voted') {
      this.status_int = 1;
    } else if (status === 'invalid-link') {
      this.status_int = 2;
    } else if (status === 'low-reputation') {
      this.status_int = 3;
    } else if (status === 'old-post') {
      this.status_int = 4;
    } else if (status === 'errored') {
      this.status_int = 5;
    } else if (status === 'blocked') {
      this.status_int = 6;
    }
    return this.http.post(this.env + '/search-post', { value: search });
  }

  searchHistory(search: string) {
    return this.http.post(this.env + '/search-history', { value: search });
  }

  searchValue(url_arr: any, search: string) {
    if (url_arr[0] === 'posts') {
      this.searchPost(url_arr[1], search).subscribe(res => {
        console.log(res.json());
      });
    } else {
      this.searchHistory(search).subscribe(res => {
        console.log(res.json());
      });
    }
  }
}
