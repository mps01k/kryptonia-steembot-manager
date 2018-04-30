import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  search_value: string;
  url: string;
  url_arr: string[];

  constructor(private route: Router, private searchService: SearchService) {

  }

  ngOnInit() {
  }

  search() {
    console.log(this.search_value);
    this.url = this.route.url;
    this.url = this.url.substring(1);
    this.url_arr = this.url.split('/');
    this.searchService.searchValue(this.url_arr, this.search_value);
  }
}
