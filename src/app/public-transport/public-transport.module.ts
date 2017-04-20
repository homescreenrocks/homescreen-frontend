import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PublicTransportRoutingModule } from './public-transport-routing.module';
import { TransportService } from './shared/transport.service';
import { PublicTransportComponent } from './public-transport.component';
import { RoutesSearchComponent } from './routes-search/routes-search.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { OverviewComponent } from './overview/overview.component';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { ServiceIconRowComponent } from './service-icon-row/service-icon-row.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    PublicTransportRoutingModule
  ],
  declarations: [PublicTransportComponent, RoutesSearchComponent, LocationSearchComponent, OverviewComponent, RouteDetailsComponent, ServiceIconRowComponent],
  providers: [TransportService]
})
export class PublicTransportModule { }
