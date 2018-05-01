import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DetailService } from './../../services/detail.service';
import { Detail } from './../../models/detail';
import { UtilService } from './../../services/util.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  item_id: number;
  details: Detail;
  histories: any;

  constructor(
    private detailService: DetailService,
    private utilService: UtilService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(res => {
      this.item_id = res.item_id;
    });
  }

  ngOnInit() {
    this.showDetails();
  }

  showDetails() {
    this.detailService.getItemDetails(this.item_id).subscribe(data => {
      this.details = data.json().detail;
      this.histories = data.json().histories != null ? data.json().histories : [];
    });
  }

  permalink(link: string) {
    return this.utilService.permalink(link);
  }

  status(status: number) {
    return this.utilService.post_status(status);
  }

  weight_percentage(weight) {
    return this.utilService.weight_percentage(weight);
  }
}
