import { Component, OnInit, HostListener } from '@angular/core';
import { NoticiasService } from '../providers/noticias.service';

import { Article } from '../interfaces/noticias.interface';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public noticias = [];
  public page = 179
  public spinnerAsync = new BehaviorSubject<boolean>(true)

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() { 
    // "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210423011220-07-north-carolina-shooting-0422-super-tease.jpg",
    this.cargarNoticias();
  }

  cargarNoticias(event?, categoria?) {

    // let resp = this.noticiasService.getNoticias3();
  
    // this.noticias.push(...resp.articles)

    

    this.noticiasService.getTopHeadlines(this.page, this.spinnerAsync).subscribe(
      resp => {
        try{

         

          // console.log(resp.news);
          if (this.page+1 > 180 || resp.news.length == 0 && this.noticias.length != 0){
                event.target.disabled = true;
          }

          this.noticias.push(...resp.news)

          if (event) {
              event.target.complete();
          }

        }catch (err) {
          console.error(err);
        }
      },
      error =>{
        console.log(error ,"There was an error in receiving data from server!', 'OK', 'error");
      })
  }
  
  loadData(event?, categoria?) {
    this.page++;
    this.cargarNoticias(event);
}

}
