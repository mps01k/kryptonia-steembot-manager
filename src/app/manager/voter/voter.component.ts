import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  public loading = false;

  constructor() { }

  ngOnInit() {
  }

  getVotersList() {
    this.loading = true;
    this.loading = false;
  }
}
