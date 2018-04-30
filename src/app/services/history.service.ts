import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../environments/environment';

@Injectable()
export class HistoryService {
  env: any = environment;

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get(this.env.apiHost + '/api/voting-history');
  }

}
