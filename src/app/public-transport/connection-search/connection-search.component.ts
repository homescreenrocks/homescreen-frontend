import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-connection-search',
  templateUrl: './connection-search.component.html',
  styleUrls: ['./connection-search.component.css']
})
export class ConnectionSearchComponent implements OnInit {
  from: {};
  to: {};

  constructor() { }

  ngOnInit() {
  }

}
