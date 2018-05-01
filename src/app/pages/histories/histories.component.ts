import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HistoryService } from './../../services/history.service';
import { UtilService } from './../../services/util.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  histories: any;

  constructor(
    private historyService: HistoryService,
    private utilService: UtilService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getHistories();
  }

  getHistories() {
    this.historyService.fetchData().subscribe((res) => {
      // console.log(res.json());
      this.histories = res.json();
    });
  }

  weight_percentage(weight) {
    return this.utilService.weight_percentage(weight);
  }

  detail(item_id) {
    this.router.navigate(['/details/' + item_id]);
  }
}
