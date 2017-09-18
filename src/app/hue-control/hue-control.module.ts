import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MdIconModule,
  MdButtonModule,
  MdRadioModule,
  MdExpansionModule,
  MdSliderModule,
  MdSlideToggleModule
} from '@angular/material';

import { HueControlRoutingModule } from './hue-control-routing.module';
import { HueControlOverviewComponent } from './hue-control-overview/hue-control-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HueControlRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdRadioModule,
    MdExpansionModule,
    MdSliderModule,
    MdSlideToggleModule
  ],
  declarations: [HueControlOverviewComponent]
})
export class HueControlModule { }
