import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { PublicTransportModule } from './public-transport/public-transport.module';
import { ModuleOverviewComponent } from './module-overview/module-overview.component';
import { GeoLocationService } from './shared/geo-location.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtI-4OZ7Kd4vNDGp-3d5rpATk8htQH6CQ'
    }),
    PublicTransportModule,
  ],
  providers: [GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
