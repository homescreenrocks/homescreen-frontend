import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TransportService } from '../shared/transport.service';
import { ILocation } from '../shared/location';
import { IRoute } from '../shared/route';

@Component({
  selector: 'hs-routes-search',
  templateUrl: './routes-search.component.html',
  styleUrls: ['./routes-search.component.css']
})
export class RoutesSearchComponent implements OnInit {
  from: ILocation;
  to: ILocation;
  routes$: Observable<IRoute[]>;

  constructor(
    private ts: TransportService
  ) { }

  ngOnInit() { }

  setLocation(location: ILocation, direction: string) {
    if (direction === 'from') { this.from = location; }
    if (direction === 'to') { this.to = location; }
    if (this.from && this.to) { this.findRoutes(); }
  }

  private findRoutes() {
    this.routes$ = this.ts.searchForRoutes(this.from, this.to);
  }

}
