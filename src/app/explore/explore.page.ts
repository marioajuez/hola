import { Component, OnInit, HostListener  } from '@angular/core';
import { NoticiasService } from '../providers/noticias.service';
import { Article } from '../interfaces/noticias.interface';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public screenWidth: any;
  public screenHeight: any;
  private noticias: Article[] = [];
  private show_card = 10;
  private indice = 0;
  private indice2 = this.show_card;
  // private 
  private noticiasScroll: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}

 

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    console.log(this.screenWidth,this.screenHeight);
    this.cargarNoticias();
  }
  loadData(event) {
    this.indice += this.show_card;
    this.indice2 += this.show_card;
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.noticiasService.getNoticias().subscribe((resp) => {
      // let resp = this.noticiasService.getNoticias3();

      if (resp.news.length === this.noticiasScroll.length)
        event.target.disabled = true;

      this.noticias.push(...resp.news);
      this.noticias.forEach((element) => {
        element.author = element.url.split('/www.')[1].split('/')[0];
      });

      if (this.indice2 >= resp.news.length)
        this.indice2 = resp.news.length;

      for (let i = this.indice; i < this.indice2; i++)
        this.noticiasScroll.push(this.noticias[i]);

      if (event) event.target.complete();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight,this.screenWidth );
  }
}
