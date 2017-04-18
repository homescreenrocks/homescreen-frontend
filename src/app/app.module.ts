import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { PublicTransportModule } from './public-transport/public-transport.module';
import { ModuleOverviewComponent } from './module-overview/module-overview.component';
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
    PublicTransportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }