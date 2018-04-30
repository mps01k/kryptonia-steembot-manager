import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../environments/environment';

@Injectable()
export class PostService {
  env: any = environment;

  constructor(private http: Http) {  }

  fetchData(status: string) {
    return this.http.get(this.env.apiHost + '/api/get-all-' + status);
  }
}
