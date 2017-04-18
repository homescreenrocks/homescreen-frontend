import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { TransportService } from '../shared/transport.service';

@Component({
  selector: 'hs-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {
  locationSearchForm: FormGroup;
  filteredResults: any;

  constructor(
    private ts: TransportService,
    private fb: FormBuilder
  ) {
    this.locationSearchForm = this.fb.group({
      input: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.locationSearchForm.controls['input'].valueChanges
      .startWith(null)
      .map(value => {
        console.log(value);
        this.ts.searchForLocation(this.locationSearchForm.controls['input'].value)
        .subscribe(res => this.filteredResults = res);
      });
  }

  findLocation() {
    this.ts.searchForLocation(this.locationSearchForm.controls['input'].value)
      .subscribe(res => console.log(res));
  }

}
