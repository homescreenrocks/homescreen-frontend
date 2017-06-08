import { Component, OnInit, Input } from '@angular/core';

import { ILocation } from '../shared/location';

@Component({
  selector: 'hs-walking-map',
  templateUrl: './walking-map.component.html',
  styleUrls: ['./walking-map.component.css']
})
export class WalkingMapComponent implements OnInit {
  @Input() from: ILocation;
  @Input() to: ILocation;

  constructor() { }

  ngOnInit() {
  }

}
