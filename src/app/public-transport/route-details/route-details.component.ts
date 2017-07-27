import { Component, OnInit, Input } from '@angular/core';

import { IRoute, IRoutePart } from '../shared/route';
import { IProduct } from '../shared/product';
import { DurationService } from '../shared/duration.service';

@Component({
  selector: 'hs-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {
  @Input() route: IRoute;

  constructor() { }

  ngOnInit() {
    console.log(this.route);
  }

  getDuration(departure: string, arrival: string): number {
    return DurationService.getDuration(departure, arrival);
  }

  getProduct(part: IRoutePart): IProduct {
    const product: IProduct = {};

    if (part.mode === 'walking') {
      product.walking = true;
      return;
    }
    if (part.line && part.line.product) {
      product[part.line.product] = true;
    }

    return product;
  }

}
