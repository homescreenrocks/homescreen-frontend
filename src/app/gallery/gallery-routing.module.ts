import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { GalleryContentComponent } from './gallery-content/gallery-content.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryOverviewComponent
  },
  {
    path: ':id',
    component: GalleryContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
