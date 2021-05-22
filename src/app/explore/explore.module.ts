import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExplorePageRoutingModule } from './explore-routing.module';
import { ExplorePage } from './explore.page';

// ---------------------------------
import { ComponentsModule } from '../components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule,

    // ---------------
    ComponentsModule,
    LazyLoadImageModule
  ],
  declarations: [
    ExplorePage
  ]
})
export class ExplorePageModule {}
