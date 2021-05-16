import { Component, OnInit, HostListener } from '@angular/core';
import { NoticiasService } from '../providers/noticias.service';
import { Article } from '../interfaces/noticias.interface';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public tabs = [
    {
      name: 'Tab heading 1',
      img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
    },
    {
      name: 'Tab heading 2',
      img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
    },
    {
      name: 'Tab heading 3',
      img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
    },
    {
      name: 'Tab heading 4',
      img:'https://www.gstatic.com/webp/gallery3/2_webp_ll.png'
    }
  ]
  public screenWidth: any;
  public screenHeight: any;
  private noticias: Article[] = [];
  private show_card = 3;
  private indice = 0;
  private indice2 = this.show_card;
  private pagina = 0;
  // private
  private noticiasScroll: Article[] = [];
  tests:any;
  constructor(private noticiasService: NoticiasService) {}


  ngOnInit() {
    // this.screenWidth = window.innerWidth;
    // this.screenHeight = window.innerHeight;
    this.tests = '123';
    // console.log(this.screenWidth,this.screenHeight);
    // this.cargarNoticias();
  }
 
  
  test($event){
   console.log('$event :', $event);
  }

  loadData(event) {
    this.indice += this.show_card;
    this.indice2 += this.show_card;

    this.cargarNoticias(event);
  }

  cargarNoticias(event?, categoria?) {


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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // console.log(this.screenHeight,this.screenWidth );
  }
}
