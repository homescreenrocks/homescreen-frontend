import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

import { TransportService } from '../shared/transport.service';
import { ILocation } from '../shared/location';

@Component({
  selector: 'hs-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  locationCtrl: FormControl;
  locationList: Observable<ILocation[]>;
  @Output() selectedLocation: EventEmitter<ILocation> = new EventEmitter();

  constructor(
    private ts: TransportService
  ) { }

  ngOnInit() {
    this.locationCtrl = new FormControl(null, Validators.required);
    this.locationCtrl.valueChanges.subscribe(value => {
      this.findLocation();
    });
  }

  displaySelectedLocation(l?: ILocation): string {
    if (!l) { return ''; }
    return l.name;
  }

  findLocation() {
    this.locationList = this.ts.searchForLocation(this.locationCtrl.value);
  }
}
