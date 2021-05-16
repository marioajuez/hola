/* eslint-disable eqeqeq */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSlides } from '@ionic/angular';
import { Article } from '../interfaces/noticias.interface';
import { NoticiasService } from '../providers/noticias.service';
import { Router } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { LoaderService } from '../providers/loader.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categoriaPage = this.noticiasService.categoriaPage + 1;

  categorias = [
    // { name: 'business', data: [], active: true, page: this.categoriaPage },
    // { name: 'sports', data: [], active: false, page: this.categoriaPage },
    // { name: 'general', data: [], active: false, page: this.categoriaPage },
    { name: 'regional', data: [], active: true, page: this.categoriaPage },
    { name: 'technology', data: [], active: false, page: this.categoriaPage },
    { name: 'lifestyle', data: [], active: false, page: this.categoriaPage },
    { name: 'business', data: [], active: false, page: this.categoriaPage },
    { name: 'general', data: [], active: false, page: this.categoriaPage },
    { name: 'programming', data: [], active: false, page: this.categoriaPage },
    // { name: 'science', data: [], active: false, page: this.categoriaPage },
    // {
    //   name: 'entertainment',
    //   data: [],
    //   active: false,
    //   page: this.categoriaPage,
    // },
    // { name: 'world', data: [], active: false, page: this.categoriaPage },
    // { name: 'sports', data: [], active: false, page: this.categoriaPage },
    // { name: 'finance', data: [], active: false, page: this.categoriaPage },
    // { name: 'academia', data: [], active: false, page: this.categoriaPage },
    // { name: 'politics', data: [], active: false, page: this.categoriaPage },
    // { name: 'health', data: [], active: false, page: this.categoriaPage },
    // { name: 'opinion', data: [], active: false, page: this.categoriaPage },
    // { name: 'food', data: [], active: false, page: this.categoriaPage },
    // { name: 'game', data: [], active: false, page: this.categoriaPage },
    // { name: 'fashion', data: [], active: false, page: this.categoriaPage },
    // { name: 'academic', data: [], active: false, page: this.categoriaPage },
    // { name: 'crap', data: [], active: false, page: this.categoriaPage },
    // { name: 'travel', data: [], active: false, page: this.categoriaPage },
    // { name: 'culture', data: [], active: false, page: this.categoriaPage },
    // { name: 'economy', data: [], active: false, page: this.categoriaPage },
    // { name: 'environment',data: [], active: false, page: this.categoriaPage},
    // { name: 'art',data: [], active: false, page: this.categoriaPage},
    // { name: 'music',data: [], active: false, page: this.categoriaPage},
    // { name: 'notsure',data: [], active: false, page: this.categoriaPage},
    // { name: 'CS',data: [], active: false, page: this.categoriaPage},
    // { name: 'education',data: [], active: false, page: this.categoriaPage},
    // { name: 'redundant',data: [], active: false, page: this.categoriaPage},
    // { name: 'television',data: [], active: false, page: this.categoriaPage},
    // { name: 'commodity',data: [], active: false, page: this.categoriaPage},
    // { name: 'movie',data: [], active: false, page: this.categoriaPage},
    // { name: 'entrepreneur',data: [], active: false, page: this.categoriaPage},
    // { name: 'review',data: [], active: false, page: this.categoriaPage},
    // { name: 'auto',data: [], active: false, page: this.categoriaPage},
    // { name: 'energy',data: [], active: false, page: this.categoriaPage},
    // { name: 'celebrity',data: [], active: false, page: this.categoriaPage},
    // { name: 'medical',data: [], active: false, page: this.categoriaPage},
    // { name: 'gadgets',data: [], active: false, page: this.categoriaPage},
    // { name: 'design',data: [], active: false, page: this.categoriaPage},
    // { name: 'EE',data: [], active: false, page: this.categoriaPage},
    // { name: 'security',data: [], active: false, page: this.categoriaPage},
    // { name: 'mobile',data: [], active: false, page: this.categoriaPage},
    // { name: 'estate',data: [], active: false, page: this.categoriaPage},
    // { name: 'funny',data: [], active: false, page: this.categoriaPage}
  ];

  indiceCategoria = 0;

  constructor(
    public noticiasService: NoticiasService,
    private router: Router,
    // public loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.cargarNoticias(this.categorias[0].name);
  }

  onTabSelect(event?) {

    this.indiceCategoria = event.detail.index;

    if (this.categorias[event.detail.index].active == false) {
        this.categorias[event.detail.index].active = true;
        this.cargarNoticias(this.categorias[event.detail.index].name);
    }
  }

  cargarNoticias(categoria?, event?) {
    this.noticiasService.getCat(categoria,this.indiceCategoria).subscribe((resp) => {
      try {
        this.categorias.forEach( element =>{
        if(element.name == categoria){

          if (element.page > 180 || resp.news.length == 0 && element.data.length != 0){
                 event.target.disabled = true;
          }
            element.data.push(...resp.news);

          if (event) {
              event.target.complete();
            }
        }
      })
      } catch (err) {
        console.error(err);
      }
    });
  }

  loadData(event?, categoria?) {
      this.noticiasService.categoriaPage = this.categorias[this.indiceCategoria].page++;
      this.cargarNoticias(categoria, event);
  }
  ver() {
    console.log(this.categorias);
  }
}
