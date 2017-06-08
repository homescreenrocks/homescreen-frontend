import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RoutesSearchComponent } from './routes-search/routes-search.component';
import { DepartureSearchComponent } from './departure-search/departure-search.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'routes',
    component: RoutesSearchComponent
  },
  {
    path: 'departures',
    component: DepartureSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PublicTransportRoutingModule { }
