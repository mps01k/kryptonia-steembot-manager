import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { SearchService } from './../../services/search.service';
import { UtilService } from './../../services/util.service';

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
    private searchService: SearchService,
    private utilService: UtilService
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
    return this.utilService.post_status(status);
  }

  str_limit(str: string) {
    return this.utilService.str_limit(str);
  }

  weight_percentage(weight) {
    return this.utilService.weight_percentage(weight);
  }

  permalink(link: string) {
    return this.utilService.permalink(link);
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
