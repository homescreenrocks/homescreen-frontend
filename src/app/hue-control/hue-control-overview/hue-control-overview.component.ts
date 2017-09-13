import { Component, OnInit } from '@angular/core';

import { HueConnectService } from '../shared/hue-connect.service';

@Component({
  selector: 'hs-hue-control-overview',
  templateUrl: './hue-control-overview.component.html',
  styleUrls: ['./hue-control-overview.component.css']
})
export class HueControlOverviewComponent implements OnInit {
  public data: any;

  constructor(
    private hcs: HueConnectService
  ) { }

  ngOnInit() {
    this.hcs.searchForDevices()
      .subscribe(res => {
        this.data = res;
      });
  }

}
