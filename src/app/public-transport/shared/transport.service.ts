import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { ILocation } from './location';

@Injectable()
export class TransportService {
  private options: RequestOptions;
  private api = 'https://transport.rest';

  constructor(private http: Http) {
    const headers = new Headers({
      'X-Identifier': 'my-homescreen-testing'
    });
    this.options = new RequestOptions({ headers: headers });
  }

  searchForStation(query: string) {
    return this.http.get(`${this.api}/stations?completion=true&query=${query}`, this.options)
      .debounceTime(200)
      .map(res => res.json());
  }

  searchForLocation(query: string) {
    return this.http.get(`${this.api}/locations?completion=true&query=${query}`, this.options)
      .debounceTime(200)
      .map(res => res.json());
  }

  searchForDepartures(stationId: string) {
    console.log(stationId);
    return this.http.get(`${this.api}/stations/${stationId}/departures`, this.options)
      .map(res => res.json());
  }

  searchForRoutes(from: ILocation, to: ILocation) {
    let fromQuery = '';
    let toQuery = '';

    // build query
    if (from.id) {
      fromQuery = `from=${from.id}`;
    } else if (from.latitude && from.longitude) {
      fromQuery = `from.latitude=${from.latitude}&from.longitude=${from.longitude}`;
    } else {
      return Observable.throw(
        new Error('route from: neither location id nor geo coordinates received')
      );
    }

    if (to.id) {
      toQuery = `to=${to.id}`;
    } else if (to.latitude && to.longitude) {
      toQuery = `to.latitude=${to.latitude}&to.longitude=${to.longitude}`;
    } else {
      return Observable.throw(
        new Error('route to: neither location id nor geo coordinates received')
      );
    }

    return this.http.get(`${this.api}/routes?${fromQuery}&${toQuery}`, this.options)
      .map(res => res.json());
  }

}
