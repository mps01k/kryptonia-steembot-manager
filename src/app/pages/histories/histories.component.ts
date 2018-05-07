import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HistoryService } from './../../services/history.service';
import { UtilService } from './../../services/util.service';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  public loading = false;
  histories: any;
  voter: string;

  constructor(
    private historyService: HistoryService,
    private utilService: UtilService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    route.params.subscribe(res => {
      this.voter = res.voter;
    });
  }

  ngOnInit() {
    this.getHistories();
  }

  getHistories() {
    this.loading = true;
    if (this.voter == null) {
      this.historyService.fetchData().subscribe((res) => {
        if (res.json() !== 'Empty') {
          this.loading = false;
          this.histories = res.json();
        } else {
          this.loading = false;
          this.histories = null;
        }
      });
    } else {
      this.searchService.searchValue('', this.voter).subscribe(res => {
        // console.log(this.field, res.json());
        if (res.json() === 'No Match') {
          this.loading = false;
          this.histories = null;
        } else {
          this.loading = false;
          this.histories = res.json();
        }
      });
    }
  }

  weight_percentage(weight) {
    return this.utilService.weight_percentage(weight);
  }

  detail(item_id) {
    this.router.navigate(['/details/' + item_id]);
  }

  author_link(author: string) {
    return this.utilService.author_link(author);
  }
}
