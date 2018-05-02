import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from './../../../environments/environment';
import { UtilService } from './../util.service';

@Injectable()
export class VoterService {
  env = environment;
  headers = new Headers();
  opts = new RequestOptions();

  constructor(
    private http: Http,
    private router: Router,
    private utilService: UtilService
  ) {}

  fetchData() {
    console.log(this.utilService.encode_ep('password'));
    this.headers.append('authorization', this.utilService.encode_ep('username:password'));
    this.headers.append('username', 'username');
    this.opts.headers = this.headers;
    return this.http.get(this.env.apiHost + '/api/get-voters-list', this.opts);
  }
}
