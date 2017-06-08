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

  getDuration(start: number, end: number): number {
    return DurationService.getDuration(start, end);
  }

  getProduct(part: IRoutePart): IProduct {
    const product: IProduct = {};

    if (part.type === 'walking') {
      product.walking = true;
      return;
    }
    if (part.product && part.product.type && part.product.type.type) {
      product[part.product.type.type] = true;
    }

    return product;
  }

}
