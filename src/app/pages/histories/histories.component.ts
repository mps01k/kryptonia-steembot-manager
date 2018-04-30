import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HistoryService } from './../../services/history.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  histories: any;

  constructor(
    private historyService: HistoryService,) {
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
    return (weight / 10000) * 100;
  }
}
