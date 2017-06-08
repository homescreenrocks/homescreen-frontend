import { ILocation } from './location';
import { IProductDetail } from './product-detail';

export interface IRoute {
  start: number;
  end: number;
  from: ILocation;
  to: ILocation;
  parts: Array<IRoutePart>;
}

export interface IRoutePart {
  direction: string;
  start: number;
  end: number;
  from: ILocation;
  to: ILocation;
  product?: IProductDetail;
  type?: 'walking';
}
