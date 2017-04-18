import { Component, OnInit } from '@angular/core';

import { ILocation } from '../shared/location';

@Component({
  selector: 'hs-connection-search',
  templateUrl: './connection-search.component.html',
  styleUrls: ['./connection-search.component.css']
})
export class ConnectionSearchComponent implements OnInit {
  private _from: ILocation;
  private _to: ILocation;

  set from(location: ILocation) {
    console.log(location);
    this._from = location;
  };

  set to(location: ILocation) {
    console.log(location);
    this._from = location;
  };

  constructor() { }

  ngOnInit() {
  }

  test(val) {
    console.log(val);
  }

}
