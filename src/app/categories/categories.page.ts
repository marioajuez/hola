import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSlides } from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';

import { Article } from '../interfaces/noticias.interface';
import { NoticiasService } from '../providers/noticias.service';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  indiceCategoria = 0;
  limitPagination = 2
  categoriaPage = 1;
  categorias= [

    { name: 'technology', data:[], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'business', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true) },
    { name: 'health', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'politics', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'science', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'world', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'environment', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'culture', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'general', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'entertainment', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'sports', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'economy', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'energy', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
    { name: 'lifestyle', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true) },
    { name: 'programming', data: [], active: false, page: this.categoriaPage,spinnerAsync: new BehaviorSubject<boolean>(true)},
  ];

  constructor(
    public noticiasService: NoticiasService,
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
     
    this.noticiasService.getTopHeadlinesCategoria(
      categoria,
      this.categorias[this.indiceCategoria].page,
      this.categorias[this.indiceCategoria].spinnerAsync
       ).subscribe(
      resp => {
        try {
          this.categorias.forEach( element =>{

            if(element.name == categoria){

                if (element.page+1 > this.limitPagination || resp.news.length == 0 && element.data.length != 0){
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
      },
      error =>{
          // console.log(error.status)
          console.log(error ,"There was an error in receiving data from server!', 'OK', 'error");
        }
      )
  }

  loadData(event?, categoria?) {
      this.categorias[this.indiceCategoria].page++;
      this.cargarNoticias(categoria, event);
  }
  ver() {
    console.log(this.categorias);
  }
}
