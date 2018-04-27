import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent implements OnInit {
  type: string;

  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe(res => this.type = res.type);
  }

  ngOnInit() {
    console.log(this.type);
  }

}
