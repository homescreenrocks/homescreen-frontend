import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleOverviewComponent } from './module-overview/module-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleOverviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'public-transport',
    loadChildren: 'app/public-transport/public-transport.module#PublicTransportModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
