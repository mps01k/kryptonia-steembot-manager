import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  env = environment;

  constructor(private http: Http) { }

  searchPost(search: string) {
    return this.http.post(this.env.apiHost + '/api/search-post', { value: search });
  }

  searchHistory(search: string) {
    return this.http.post(this.env.apiHost + '/api/search-history', { value: search });
  }

  searchValue(field: string, search: string) {
    if (field === 'posts') {
      return this.searchPost(search);
    } else {
      return this.searchHistory(search);
    }
  }
}
