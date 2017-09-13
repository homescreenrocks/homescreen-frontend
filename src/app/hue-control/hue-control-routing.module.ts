import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HueControlOverviewComponent } from './hue-control-overview/hue-control-overview.component';
import { HueConnectService } from './shared/hue-connect.service';

const routes: Routes = [{
  path: '',
  component: HueControlOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HueConnectService]
})
export class HueControlRoutingModule { }
