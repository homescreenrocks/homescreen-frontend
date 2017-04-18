import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ConnectionSearchComponent } from './connection-search/connection-search.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'connection',
    component: ConnectionSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PublicTransportRoutingModule { }
