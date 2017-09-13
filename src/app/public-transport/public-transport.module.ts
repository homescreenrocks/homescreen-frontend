import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
  MdTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

import { PublicTransportRoutingModule } from './public-transport-routing.module';
import { TransportService } from './shared/transport.service';
import { RoutesSearchComponent } from './routes-search/routes-search.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { OverviewComponent } from './overview/overview.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { ServiceIconRowComponent } from './service-icon-row/service-icon-row.component';
import { WalkingMapComponent } from './walking-map/walking-map.component';
import { DepartureSearchComponent } from './departure-search/departure-search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
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
    MdInputModule,
    MdRadioModule,
    MdCheckboxModule,
    MdCardModule,
    MdAutocompleteModule,
    MdExpansionModule,
    MdTabsModule,
    FlexLayoutModule,
    PublicTransportRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtI-4OZ7Kd4vNDGp-3d5rpATk8htQH6CQ'
    })
  ],
  declarations: [
    RoutesSearchComponent,
    LocationSearchComponent,
    OverviewComponent,
    RouteDetailsComponent,
    ServiceIconRowComponent,
    WalkingMapComponent,
    DepartureSearchComponent
  ],
  providers: [TransportService]
})
export class PublicTransportModule { }
