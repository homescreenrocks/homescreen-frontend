export interface ILightList {
  [index: number]: ILight;
}

export interface ILight {
  id?: number;
  manufacturername: string;
  modelid: string;
  name: string;
  state: {
    alert: string;
    bri: number;
    colormode: string;
    ct: number;
    effect: string;
    hue: number;
    on: boolean;
    reachable: boolean;
    sat: number;
    xy: {
      0: number;
      1: number;
    };
  };
  swupdate: {
    lastinstall: any;
    state: string;
  };
  swversion: string;
  type: string;
  uniqueid: string;
}
