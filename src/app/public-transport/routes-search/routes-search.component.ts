import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TransportService } from '../shared/transport.service';
import { ILocation } from '../shared/location';
import { IRoute } from '../shared/route';
import { IProduct } from '../shared/product';
import { DurationService } from '../shared/duration.service';

@Component({
  selector: 'hs-routes-search',
  templateUrl: './routes-search.component.html',
  styleUrls: ['./routes-search.component.css']
})
export class RoutesSearchComponent implements OnInit {
  from: ILocation;
  to: ILocation;
  routes$: Observable<IRoute[]>;
  detailView: number;

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

  showDetails(i: number) {
    this.detailView = this.detailView === i ? null : i;
  }

  getAllProducts(route: IRoute): IProduct {
    const product: IProduct = {};

    route.parts.forEach(p => {
      if (p.mode && p.mode === 'walking') {
        product.walking = true;
        return;
      }
      if (p.line && p.line.product) {
        product[p.line.product] = true;
      }

    });

    return product;
  }

  getDuration(departure: string, arrival: string): number {
    return DurationService.getDuration(departure, arrival);
  }

}
