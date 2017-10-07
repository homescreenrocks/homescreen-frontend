import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatExpansionModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';

import { HueControlRoutingModule } from './hue-control-routing.module';
import { HueControlOverviewComponent } from './hue-control-overview/hue-control-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HueControlRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  declarations: [HueControlOverviewComponent]
})
export class HueControlModule { }
