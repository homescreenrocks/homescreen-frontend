import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class TransportService {
  private api = 'http://localhost:3000/vbb';

  constructor(private http: Http) { }

  searchForLocation(query: string) {
    return this.http.get(`${this.api}/locations?query=${query}`)
      .debounceTime(200)
      .map(res => res.json());
  }

}
