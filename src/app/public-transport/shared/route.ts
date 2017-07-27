import { ILocation } from './location';
import { IProductDetail } from './product-detail';

export interface IRoute {
  arrival: number;
  departure: number;
  origin: ILocation;
  destination: ILocation;
  parts: Array<IRoutePart>;
}

export interface IRoutePart {
  direction?: string;
  departure: number;
  arrival: number;
  origin: ILocation;
  destination: ILocation;
  mode?: 'walking' | 'station';
  parts: IRouteSubPart;
  line?: IProductDetail;
  alternatives?: IProductDetail[];
}

export interface IRouteSubPart {
  direction?: string;
  delay?: number;
  id?: string;
  departure: number;
  arrival: number;
  origin: ILocation;
  destination: ILocation;
}
