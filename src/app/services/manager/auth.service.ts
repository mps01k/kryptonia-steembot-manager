import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../../environments/environment';
import { UtilService } from './../../services/util.service';

@Injectable()
export class AuthService {
  env = environment;

  constructor(private http: Http, private utilService: UtilService) { }

  attempt(username: string, password: string) {
    const ep = this.utilService.encode_ep(password);
    return this.http.post(this.env.apiHost + '/api/login', {username: username, ep: ep});
  }
}
