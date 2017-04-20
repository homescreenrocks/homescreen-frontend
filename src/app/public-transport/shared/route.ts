import { ILocation } from './location';
import { IProductDetail } from './product-detail';

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
    product?: IProductDetail;
    walking?: boolean;
  }];
}
