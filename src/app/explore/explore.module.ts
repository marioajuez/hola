import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import { ComponentsModule } from '../components/components.module';

// import { IonicTabSliderModule } from 'ionic-module-template';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule,
    ComponentsModule
    // IonicTabSliderModule // Import this module here
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
