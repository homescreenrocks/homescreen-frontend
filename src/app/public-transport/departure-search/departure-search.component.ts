import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TransportService } from '../shared/transport.service';
import { IStation } from '../shared/station';

@Component({
  selector: 'hs-departure-search',
  templateUrl: './departure-search.component.html',
  styleUrls: ['./departure-search.component.css']
})
export class DepartureSearchComponent implements OnInit {
  departures: any[];

  constructor(
    public ts: TransportService
  ) { }

  ngOnInit() {
  }

  getDepartures(station: IStation) {
    this.ts.searchForDepartures(station.id).subscribe(res => this.departures = res);
  }
}
