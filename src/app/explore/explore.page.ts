import { Component, OnInit, HostListener } from '@angular/core';
import { NoticiasService } from '../providers/noticias.service';

import { Article } from '../interfaces/noticias.interface';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  private noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}


  ngOnInit() {
 
    this.cargarNoticias();
  }
 
  
  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?, categoria?) {

    const resp = this.noticiasService.getNoticias3();


    console.log(resp);



    // this.noticiasService.getNoticias2().subscribe((resp) => {
    //   // let resp = this.noticiasService.getNoticias3();
    //   // console.log(resp.articles.length);

    //   if (resp.articles.length === 0) event.target.disabled = true;


    //   this.noticias.push(...resp.articles);

    //   // // this.noticias.forEach((element) => {
    //   // //   element.author = element.url.split('/www.')[1].split('/')[0];
    //   // // });

    //   this.noticiasScroll = this.noticias

    //   // for (let i = this.indice; i < this.indice2; i++)
    //   //   this.noticiasScroll.push(this.noticias[i]);

    //   if (event) event.target.complete();
    // });
  }

}
