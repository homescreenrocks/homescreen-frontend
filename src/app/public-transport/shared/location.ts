import { IProduct } from './product';

export interface ILocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
  products?: IProduct;
}
