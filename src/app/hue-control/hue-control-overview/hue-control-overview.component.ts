import { Component, OnInit } from '@angular/core';
import { MdSlideToggleChange } from '@angular/material';

import { HueConnectService } from '../shared/hue-connect.service';
import { ILight } from '../shared/lights';

@Component({
  selector: 'hs-hue-control-overview',
  templateUrl: './hue-control-overview.component.html',
  styleUrls: ['./hue-control-overview.component.css']
})
export class HueControlOverviewComponent implements OnInit {
  public lights: ILight[];
  public colorModel: 'color' | 'temperature' = null;

  constructor(
    private hcs: HueConnectService
  ) { }

  ngOnInit() {
    this.getLightStates();
  }

  getLightStates() {
    this.hcs.getLights()
    .subscribe(lights => {
      this.lights = lights;
    });
  }

  onOff(change: MdSlideToggleChange, lightId: number) {
    console.log(change, lightId);
    const stateConfig = {
      on: change.checked
    };

    this.hcs.setLightValue(lightId, stateConfig)
      .subscribe(res => this.getLightStates());
  }

  save(lightId: number, cm: string) {
    console.log(lightId, cm);
    const l = this.lights.find(light => light.id === lightId);
    console.log(l);

    const stateConfig = {
      on: true,
      bri: l.state.bri,
      ct: null,
      hue: null,
      sat: null
    };

    if (cm === 'temperature') {
      stateConfig.ct = l.state.ct;
    }

    if (cm === 'color') {
      stateConfig.hue = l.state.hue;
      stateConfig.sat = l.state.sat;
    }

    this.hcs.setLightValue(lightId, stateConfig)
      .subscribe(res => res);
  }

}
