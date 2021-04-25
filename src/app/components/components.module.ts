import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderComponent } from './header/header.component';
import { NoticiaComponent } from './noticia/noticia.component';


@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [
    NoticiasComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
