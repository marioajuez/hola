import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { ComponentsModule } from '../components/components.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../providers/interceptor.service';

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
})
export class CategoriesPageModule {}
