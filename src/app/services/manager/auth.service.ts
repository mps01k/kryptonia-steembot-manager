import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';
import { UtilService } from './../../services/util.service';

import * as Store from 'store2';

@Injectable()
export class AuthService {
  public store = Store;
  env = environment;

  constructor(
    private http: Http,
    private utilService: UtilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  check(username, epass, callback) {
    if (username === '' || epass === '' || username === null || epass === null) {
      // return 'declined';
      callback('declined');
    } else {
      this.http.post(this.env.apiHost + '/api/login', { username: username, epass: epass }).subscribe(res => {
        if (res.json() === 'Credentials Not Matched') {
          // return 'declined';
          callback('declined');
        } else {
          // return 'granted';
          callback('granted');
        }
      });
    }
  }

  attempt(username: string, password: string, parent, callback) {
    const epass = this.utilService.generate_epass(username, password);
    this.http.post(this.env.apiHost + '/api/login', { username: username, epass: epass }).subscribe(res => {
      if (res.json() === 'Credentials Not Matched') {
        callback('invalid', parent);
      } else {
        this.store.set('username', res.json().username);
        this.store.set('epass', res.json().epass);
        callback('valid', parent);
      }
    });
  }

  logout(callback) {
    this.store.set('username', '');
    this.store.set('epass', '');
    callback('done');
  }
}
