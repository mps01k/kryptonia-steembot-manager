import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit, OnDestroy {
  field: string;
  search_value: string;
  results: any[];
  navigationSubscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {
    this.navigationSubscription = router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.startsearch();
      }
    });
  }

  ngOnInit() {
    // this.startsearch();
  }

  startsearch() {
    // console.log(this.field, this.search_value,);
    this.field = this.route.snapshot.queryParamMap.get('field');
    this.search_value = this.route.snapshot.queryParamMap.get('value');
    this.searchService.searchValue(this.field, this.search_value).subscribe(res => {
      // console.log(this.field, res.json());
      if (res.json() === 'No Match') {
        this.results = null;
      } else {
        this.results = res.json();
      }
    });
  }

  c_status(status: number) {
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

  str_limit(str: string) {
    const limit = 50;
    if (str.length > limit) {
      const len = str.length - limit;
      return '...' + str.substring(len);
    } else {
      return str;
    }
  }

  weight_percentage(weight) {
    return (weight / 10000) * 100;
  }

  detail(item_id) {
    this.router.navigate(['/details/' + item_id]);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
