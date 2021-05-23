import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticias.interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];
  constructor(
    private storage: Storage,
    public toastController: ToastController
  )
  {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article){
   
    const existe = this.noticias.find( noti =>  noti.title === noticia.title);

    if ( !existe )
    {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }
    this.presentToast('Agregado a favorito');
  }

  async cargarFavoritos()
  {
    await this.storage.create();
    const favoritos = await this.storage.get('favoritos');
    if (favoritos)
    {
        this.noticias = favoritos;
    }
  }

  borrarNoticia( noticia: Article)
  {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Eliminado de favoritos');
  }

  async presentToast(data?: string) {
    const toast = await this.toastController.create({
      message: data ,
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }
}
