import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  search_value: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log(this.search_value);
  }
}
