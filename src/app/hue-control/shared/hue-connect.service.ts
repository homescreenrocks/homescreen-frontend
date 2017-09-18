import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { ILightList, ILight } from './lights';

@Injectable()
export class HueConnectService {
  private username = '4JOBPVSlXXUuKHZYALuJ5o-HaGxwdTcT73cVCLpu';

  constructor(
    @Inject('HUE_BRIDGE_API_URL') private api: string,
    private http: Http
  ) { }

  getLights(): Observable<ILight[]> {
    return this.http.get(`${this.api}/${this.username}/lights`)
      .debounceTime(200)
      .map(res => res.json())
      .map(res => {
        const returnArr = [];
        Object.keys(res).forEach(lightId => {
          const l = res[lightId];
          l.id = lightId;
          returnArr.push(l);
        });
        return returnArr;
      });
  }

  setLightValue(lightId: number, config: any): Observable<any> {
    return this.http.put(`${this.api}/${this.username}/lights/${lightId}/state`, config)
    .debounceTime(200)
    .map(res => res.json());
  }
}
