import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

import { HueConnectService } from '../shared/hue-connect.service';
import { ILight } from '../shared/lights';

@Component({
  selector: 'hs-hue-control-overview',
  templateUrl: './hue-control-overview.component.html',
  styleUrls: ['./hue-control-overview.component.css']
})
export class HueControlOverviewComponent implements OnInit {
  public lights: ILight[];
  public colorModel: 'color' | 'temperature' | 'colorloop' = null;

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

  onOff(change: MatSlideToggleChange, lightId: number) {
    const stateConfig = {
      on: change.checked
    };

    this.hcs.setLightValue(lightId, stateConfig)
      .subscribe(res => res);
  }

  save(lightId: number, cm: string) {
    const l = this.lights.find(light => light.id === lightId);

    const stateConfig = {
      on: true,
      bri: l.state.bri,
      ct: null,
      hue: null,
      sat: null,
      effect: 'none'
    };

    if (cm === 'temperature') {
      stateConfig.ct = l.state.ct;
    }

    if (cm === 'color') {
      stateConfig.hue = l.state.hue;
      stateConfig.sat = l.state.sat;
    }

    if (cm === 'colorloop') {
      stateConfig.effect = 'colorloop';
    }

    this.hcs.setLightValue(lightId, stateConfig)
      .subscribe(res => res);
  }

}
