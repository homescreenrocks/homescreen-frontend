import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { TransportService } from '../shared/transport.service';
import { ILocation } from '../shared/location';

@Component({
  selector: 'hs-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  @Input() title: string;
  @Input() type?: string;
  @Output() selectedLocation: EventEmitter<ILocation> = new EventEmitter();
  locationCtrl: FormControl;
  locationList$: Observable<ILocation[]>;

  constructor(
    private ts: TransportService
  ) { }

  ngOnInit() {
    this.locationCtrl = new FormControl(null, Validators.required);
    this.locationCtrl.statusChanges.subscribe(value => {
      if (typeof this.locationCtrl.value !== 'object') {
        this.findLocation();
      } else {
        this.selectedLocation.emit(this.locationCtrl.value);
      }
    });
  }

  displaySelectedLocation(l?: ILocation): string {
    return l ? l.name : '';
  }

  findLocation() {
    if (this.type && this.type === 'station') {
      this.locationList$ = this.ts.searchForStation(this.locationCtrl.value);
    } else {
      this.locationList$ = this.ts.searchForLocation(this.locationCtrl.value);
    }
  }

}
