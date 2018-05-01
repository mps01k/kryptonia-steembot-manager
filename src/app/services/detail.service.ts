import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from './../../environments/environment';

@Injectable()
export class DetailService {
  env = environment;

  constructor(private http: Http) { }

  getItemDetails(item_id: number) {
    return this.http.post(this.env.apiHost + '/api/get-item-detail', { id: item_id });
  }
}
