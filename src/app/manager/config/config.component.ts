import { Component, OnInit } from '@angular/core';
import { ExtendedComponent } from './../../../app/extendedcomponent';
import { ManagerComponent } from './../manager/manager.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends ManagerComponent implements OnInit {
  apiHost: string;
  salt: string;
  voting_interval: number;
  max_weight: number;
  min_weight: number;

  ngOnInit() {
    this.getCongfig();
    this.apiHost = 'http://kryptonia.io';
    this.salt = 'salt';
    this.voting_interval = 30000;
    this.max_weight = 100;
    this.min_weight = 10;
  }

  getCongfig() {
    this.loading = true;
    this.authenticated = true;
    this.loading = false;
  }
}
