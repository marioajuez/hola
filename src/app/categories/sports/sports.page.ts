import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/providers/noticias.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  noticias: any = []

  constructor(private noticiasService:NoticiasService) { }

  ngOnInit() {
      this.cargarNoticias();
  }

  
  cargarNoticias(categoria?: string, event?) {
    this.noticiasService.getSomeData().subscribe((resp) => {
      this.noticias.push(...resp.news);
    });
  }

}
