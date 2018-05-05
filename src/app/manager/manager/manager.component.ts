import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VoterService } from './../../services/manager/voter.service';
import { AuthService } from './../../services/manager/auth.service';
import { UtilService } from './../../services/util.service';

import * as Store from 'store2';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  protected store = Store;
  password: string;
  username: string;
  epass: string;
  public loading = false;
  public authenticated = false;
  protected planned_url: string = null;

  constructor(
    protected voterService: VoterService,
    protected authService: AuthService,
    protected utilService: UtilService,
    protected router: Router,
    protected route: ActivatedRoute
  ) {
    // this.check_if_authenticated();
    this.username = this.store.get('username');
    this.epass = this.store.get('epass');
  }

  ngOnInit() {

  }

  check_if_authenticated() {
    this.loading = true;
    this.authService.check(this.username, this.epass, (res) => {
      this.loading = false;
      console.log(res);
      if (res === 'granted') {
        this.authenticated = true;
      } else {
        this.authenticated = false;
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

  author_link(author: string) {
    return this.utilService.author_link(author);
  }
}
