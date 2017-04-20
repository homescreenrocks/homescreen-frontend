import { Component, Input } from '@angular/core';

import { IProduct } from '../shared/product';

@Component({
  selector: 'hs-service-icon-row',
  templateUrl: './service-icon-row.component.html',
  styleUrls: ['./service-icon-row.component.css']
})
export class ServiceIconRowComponent {
  @Input() products: IProduct;
}
