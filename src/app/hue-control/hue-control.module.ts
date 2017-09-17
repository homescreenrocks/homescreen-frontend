import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MdListModule,
  MdTooltipModule,
  MdOptionModule,
  MdSelectModule,
  MdMenuModule,
  MdSnackBarModule,
  MdGridListModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdRadioModule,
  MdInputModule,
  MdCheckboxModule,
  MdCardModule,
  MdAutocompleteModule,
  MdExpansionModule,
  MdTabsModule,
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
    MdListModule,
    MdTooltipModule,
    MdOptionModule,
    MdSelectModule,
    MdMenuModule,
    MdSnackBarModule,
    MdGridListModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdCheckboxModule,
    MdCardModule,
    MdAutocompleteModule,
    MdExpansionModule,
    MdTabsModule,
    MdSliderModule,
    MdSlideToggleModule
  ],
  declarations: [HueControlOverviewComponent]
})
export class HueControlModule { }
