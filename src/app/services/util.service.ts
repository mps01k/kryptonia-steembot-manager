import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

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
}