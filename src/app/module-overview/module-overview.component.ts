import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from '../shared/geo-location.service';

@Component({
  selector: 'hs-module-overview',
  templateUrl: './module-overview.component.html',
  styleUrls: ['./module-overview.component.css']
})
export class ModuleOverviewComponent implements OnInit {
  position: Position;

  constructor(
    public gls: GeoLocationService
  ) { }

  ngOnInit() {
    this.gls.getCurrentPosition()
      .subscribe(pos => this.position = pos);
  }

}
