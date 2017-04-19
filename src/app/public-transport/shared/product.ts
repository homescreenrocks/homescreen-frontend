export interface IProduct {
  class: number;
  express: boolean;
  line: string;
  metro: boolean;
  name: string;
  night: false;
  nr: number | string;
  productCode: number;
  productName: string;
  symbol: string;
  type: {
    ansi: string[],
    bitmask: number;
    category: number;
    color: string;
    name: string;
    short: string;
    type: string;
    unicode: string;
  };
}
