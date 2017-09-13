import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleOverviewComponent } from './module-overview/module-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ModuleOverviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'public-transport',
    loadChildren: 'app/public-transport/public-transport.module#PublicTransportModule'
  },
  {
    path: 'gallery',
    loadChildren: 'app/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'hue-control',
    loadChildren: 'app/hue-control/hue-control.module#HueControlModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
