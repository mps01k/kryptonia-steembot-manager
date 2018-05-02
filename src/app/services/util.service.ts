import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class UtilService {
  env = environment;

  constructor() { }

  permalink(link: string) {
    link = link.substring(link.indexOf('@'));
    link = link.substring(link.indexOf('/') + 1);
    return link;
  }

  post_status(status: number) {
    if (status === 0) {
      return 'PENDING';
    } else if (status === 1) {
      return 'VOTED';
    } else if (status === 2) {
      return 'INVALID LINK';
    } else if (status === 3) {
      return 'LOW REPUTATION';
    } else if (status === 4) {
      return 'OLD POST';
    } else if (status === 5) {
      return 'ERROR';
    } else if (status === 6) {
      return 'BLOCKED';
    }
  }

  weight_percentage(weight) {
    return (weight / 10000) * 100;
  }

  str_limit(str: string) {
    const limit = 50;
    if (str.length > limit) {
      const len = str.length - limit;
      return '...' + str.substring(len);
    } else {
      return str;
    }
  }

  kryptonia_task_link(task_id: number) {
    return this.env.liveHost + '/task/' + task_id + '/view-detail';
  }

  encode_ep(str) {
    str = str + config.options.salt;
    const base = Buffer.from(str).toString('base64');
    return base;
  }

  decode_ep(base) {
    let str = Buffer.from(base, 'base64').toString();
    str = str.substring(0, str.length - config.options.salt.length);
    return str;
  }
}
