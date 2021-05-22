import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderComponent } from './header/header.component';
import { NoticiaComponent } from './noticia/noticia.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,

    // ------------
    LazyLoadImageModule
  ],
  exports: [
    NoticiasComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
