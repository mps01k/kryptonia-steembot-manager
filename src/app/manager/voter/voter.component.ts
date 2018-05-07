import { Component, OnInit } from '@angular/core';
import { ExtendedComponent } from './../../../app/extendedcomponent';
import { ManagerComponent } from './../manager/manager.component';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent extends ManagerComponent implements OnInit {
  voters: any = null;

  ngOnInit() {
    this.getVotersList();
  }

  getVotersList() {
    this.loading = true;
    this.voterService.fetchData(this.username, this.epass).subscribe(res => {
      this.loading = false;
      if (res.json() === 'Not Authenticated') {
        this.authenticated = false;
      } else if (res.json() === 'Empty') {
        this.authenticated = true;
        this.voters = null;
      } else {
        this.authenticated = true;
        this.voters = res.json();
      }
    });
  }
}
