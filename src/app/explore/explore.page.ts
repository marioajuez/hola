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


  errorMensaje = {
    429: "Se ha excedido el numero de solicitudes por hoy"
  }

  
  public noticias = [];
  public page = 1
  public spinnerAsync = new BehaviorSubject<boolean>(true)

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() { 

    this.cargarNoticias();
  }

  cargarNoticias(event?, categoria?) {

    this.noticiasService.getTopHeadlines(this.page, this.spinnerAsync).subscribe(
      resp => {
        try{

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
        console.log(this.errorMensaje[error.status]);
  
        // console.log(error ,"There was an error in receiving data from server!', 'OK', 'error");
      })
  }
  
  loadData(event?, categoria?) {
    this.page++;
    this.cargarNoticias(event);
}

refreshNews(event){

  this.page = 1;
  this.noticiasService.getTopHeadlines(this.page, this.spinnerAsync).subscribe( 
    resp =>{
      this.noticias = []
      this.noticias.push(...resp.news)
      event.target.complete();
    }
  )
}

}
