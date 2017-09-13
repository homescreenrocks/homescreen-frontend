import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Injectable()
export class HueConnectService {
  private api = 'http://192.168.2.100/api';
  private username = '4JOBPVSlXXUuKHZYALuJ5o-HaGxwdTcT73cVCLpu';

  constructor(private http: Http) { }

  searchForDevices() {
    return this.http.get(`${this.api}/${this.username}/lights`)
      .debounceTime(200)
      .map(res => res.json());
  }
}
