import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HueControlRoutingModule } from './hue-control-routing.module';
import { HueControlOverviewComponent } from './hue-control-overview/hue-control-overview.component';

@NgModule({
  imports: [
    CommonModule,
    HueControlRoutingModule
  ],
  declarations: [HueControlOverviewComponent]
})
export class HueControlModule { }
