import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { GalleryContentComponent } from './gallery-content/gallery-content.component';

@NgModule({
  imports: [
    CommonModule,
    ModalGalleryModule.forRoot(),
    GalleryRoutingModule
  ],
  declarations: [GalleryOverviewComponent, GalleryContentComponent]
})
export class GalleryModule { }
