import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { ILocation } from './location';

@Injectable()
export class TransportService {
  private api = 'http://localhost:3000/vbb';

  constructor(private http: Http) { }

  searchForLocation(query: string) {
    return this.http.get(`${this.api}/locations?query=${query}`)
      .debounceTime(200)
      .map(res => res.json());
  }

  searchForRoutes(from: ILocation, to: ILocation) {
    return this.http.get(`${this.api}/routes?from=${from.id}&to=${to.id}`)
      .debounceTime(200)
      .map(res => res.json());
  }

}
