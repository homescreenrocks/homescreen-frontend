export interface ILocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
  products?: {
    bus?: boolean;
    express?: boolean;
    ferry?: boolean;
    regional?: boolean;
    suburban?: boolean;
    subway?: boolean;
    tram?: boolean;
  };
}
