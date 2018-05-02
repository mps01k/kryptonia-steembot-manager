import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from './../../../environments/environment';

@Injectable()
export class VoterService {
  env = environment;

  constructor(
    private http: Http,
    private headers: Headers,
    private requestOptions: RequestOptions,
    private router: Router
  ) { }

  fetchData() {
    // const
    // this.headers.append('authorization', );+
    return this.http.get(this.env.apiHost + '/get-voters-list');
  }
}
