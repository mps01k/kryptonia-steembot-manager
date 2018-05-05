import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VoterService } from './../../services/manager/voter.service';
import { AuthService } from './../../services/manager/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  navigationSubscription;
  public loading = false;
  public authenticated = false;
  username: string;
  password: string;
  protected planned_url: string = null;

  constructor(
    protected voterService: VoterService,
    protected authService: AuthService,
    protected router: Router
  ) {}

  ngOnInit() {
    this.check_if_authenticated();
  }

  check_if_authenticated() {
    this.loading = true;
    this.authService.check((res) => {
      this.loading = false;
      if (res === 'granted') {
        this.authenticated = true;
        if (this.planned_url !== '/manager' && this.planned_url !== null) {
          this.router.navigate([this.planned_url]);
        } else {
          this.router.navigate(['/manager/voters']);
        }
      } else {
        this.authenticated = false;
        if (this.planned_url !== '/manager') {
          this.router.navigate(['/manager']);
        }
      }
    });
  }

  login() {
    this.loading = true;
    this.authService.attempt(this.username, this.password, this, function (res, parent) {
      parent.loading = false;
      if (res === 'valid') {
        parent.authenticated = true;
        if (parent.planned_url === '/manager' || parent.planned_url === null) {
          parent.router.navigate(['/manager/voters']);
        } else {
          parent.router.navigate([parent.planned_url]);
        }
      } else {
        parent.authenticated = false;
      }
    });
  }

  input(event) {
    if (event.keyCode === 13) {
      this.login();
    }
  }
}
