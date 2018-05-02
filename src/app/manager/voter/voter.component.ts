import { Component, OnInit } from '@angular/core';

import { VoterService } from './../../services/manager/voter.service';
import { AuthService } from './../../services/manager/auth.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  public loading = false;
  authenticated = false;
  username: string;
  password: string;

  constructor(private voterService: VoterService, private authService: AuthService) { }

  ngOnInit() {
    this.getVotersList();
  }

  getVotersList() {
    this.loading = true;
    this.voterService.fetchData().subscribe(res => {
      this.loading = false;
      console.log(res.json());
    });
  }

  login() {
    this.authService.attempt(this.username, this.password).subscribe(res => {
      console.log(res.json());
    });
  }
}
