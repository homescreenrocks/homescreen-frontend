import { IProduct } from './product';

export interface ILocation {
  id?: number;
  name: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  }
  type: 'address' | 'location';
  products?: IProduct;
}
