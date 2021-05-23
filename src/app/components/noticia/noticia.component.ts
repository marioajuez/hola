
import { Component, OnInit, Input, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
// import { Article } from '../../interfaces/interfaces';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController,IonImg } from '@ionic/angular';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { ToastController } from '@ionic/angular';
import { Article } from '../../interfaces/noticias.interface';
import { Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DataLocalService } from 'src/app/providers/data-local.service';



@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticiaComponent{

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;

  errorImage = "assets/news-default.jpg"

  constructor(
    // private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    // private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService
    ){
    }


  async lanzarMenu()
  {

    let guardarBorrarBtn;
    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        cssClass: 'action-dark',
        icon: 'trash',
        handler: () => {
          console.log('Borrar de favorito');
          this.dataLocalService.borrarNoticia(this.noticia);
        }
      };
    }
    else
    {
      guardarBorrarBtn = {
        text: 'Favorito',
        cssClass: 'action-dark',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');

          console.log(this.noticia);
          this.dataLocalService.guardarNoticia(this.noticia);
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      buttons: [ {
        text: 'Compartir',
        cssClass: 'action-dark',
        icon: 'share-social',
        handler: () => {
          console.log('Share clicked');
          this.shareNew();
        //   this.socialSharing.share(
        //     this.noticia.title,
        //     this.noticia.source.name,
        //     '',
        //     this.noticia.url
        //   // );
        // }
      }},
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        cssClass: 'action-dark',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
      }}
    ]
    });
    await actionSheet.present();
  }

  shareNew(){

    if (navigator.share) {
      navigator.share({
        title: 'WebShare API Demo',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // fallback
    }
  }

  }



