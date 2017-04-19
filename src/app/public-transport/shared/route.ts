import { ILocation } from './location';
import { IProduct } from './product';

export interface IRoute {
  start: Date;
  end: Date;
  from: ILocation;
  to: ILocation;
  parts: [{
    delay: number;
    direction: string;
    start: Date;
    end: Date;
    from: ILocation;
    to: ILocation;
    product: IProduct
  }];
}
