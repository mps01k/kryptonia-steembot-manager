import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { environment } from './../../../environments/environment';
import { UtilService } from './../util.service';

@Injectable()
export class VoterService {
  env = environment;

  constructor(
    private http: Http,
    private router: Router,
    private utilService: UtilService
  ) {}

  fetchData(username: string, epass: string) {
    console.log(username, epass);
    const opts = this.utilService.get_header_options(username, epass);
    return this.http.get(this.env.apiHost + '/api/get-voters-list', opts);
  }
}
