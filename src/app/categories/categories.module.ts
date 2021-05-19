import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { ComponentsModule } from '../components/components.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    ComponentsModule,
    SuperTabsModule
    ],
  declarations: [CategoriesPage],
  providers: [],
})
export class CategoriesPageModule {}
