
import { Component, OnInit, Input } from '@angular/core';
// import { Article } from '../../interfaces/interfaces';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { DataLocalService } from '../../services/data-local.service';
import { ToastController } from '@ionic/angular';
import { Article } from '../../interfaces/noticias.interface';



@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  animations: []
})
export class NoticiaComponent {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;
  constructor(
    // private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    // private socialSharing: SocialSharing,
    // private dataLocalService: DataLocalService
    ){}

  abrirNoticia() {
    // const browser = this.iab.create(this.noticia.url, '_system');
  }
  async lanzarMenu()
  {

    let guardarBorrarBtn ;
    // if (this.enFavoritos) {
    //   guardarBorrarBtn = {
    //     text: 'Borrar Favorito',
    //     cssClass: 'action-dark',
    //     icon: 'trash',
    //     handler: () => {
    //       console.log('Borrar de favorito');
    //       // this.dataLocalService.borrarNoticia(this.noticia);
    //     }
    //   };
    // }
    // else
    // {
      guardarBorrarBtn = {
        text: 'Favorito',
        cssClass: 'action-dark',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          // this.dataLocalService.guardarNoticia(this.noticia);
        }
      };
    // }


    const actionSheet = await this.actionSheetController.create({
      buttons: [ {
        text: 'Compartir',
        cssClass: 'action-dark',
        icon: 'share-social',
        handler: () => {
          console.log('Share clicked');
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
}
