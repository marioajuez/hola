/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaHeadLines } from '../interfaces/noticias.interface';
import { noticias_json } from './json';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { share } from 'rxjs/internal/operators';
import { BehaviorSubject } from 'rxjs';
import { finalize} from 'rxjs/operators';

// import { tap } from 'rxjs/internal/operators';
// import { Share } from '@ngspot/rxjs/decorators';
import { publishReplay, refCount, map } from 'rxjs/operators';

const apiKey = '1reP0_nL4m0SAJV9QO-2Wh1U-LGaQMwt3zKhhPLXI705NlND';
const apiKey2 = '3ce4bc4186834f66b686ddb48b27f7d1';
// const apikey3 = "3ce4bc4186834f66b686ddb48b27f7d1"

// const headers = new HttpHeaders({
//    Authorization: apiKey
// })

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  someDataObservable: Observable<any>;

  spinners =[
    new BehaviorSubject<boolean>(true),
    new BehaviorSubject<boolean>(true),
    new BehaviorSubject<boolean>(true),
    new BehaviorSubject<boolean>(true),
    new BehaviorSubject<boolean>(true),
    new BehaviorSubject<boolean>(true),
  ]


  // public isLoading_: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  // isLoading = new Subject<boolean>();

  public categoriaPage = 179;

  private cache: any;
  headLinesPage: any = 0;

  constructor(private httpClient: HttpClient) {}

  getNoticias() {
    // this.headLinesPage++;
    console.log(this.headLinesPage);
    return this.httpClient.get<RespuestaHeadLines>(
      `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&language=es&country=co&page_number=${this.headLinesPage}`
    );
  }
  getNoticias2() {
    this.headLinesPage++;
    console.log(this.headLinesPage);
    return this.httpClient.get<RespuestaHeadLines>(
      `https://newsapi.org/v2/top-headlines?country=co&apiKey=${apiKey2}&page=${this.headLinesPage}`
    );
  }
  getNoticias3() {
    return noticias_json;
  }

  getCategarias( categoria: string){

    const req  = `https://newsapi.org/v2/top-headlines?country=co&apiKey=${apiKey2}&page=${this.categoriaPage}&category=${categoria}`;
    return this.httpClient.get<RespuestaHeadLines>(req);
    // console.log(categoria);

  }

  getCat( cat: string, indiceCategoria){

    // this.isLoading_.next(true);

    const req  = `https://api.currentsapi.services/v1/latest-news?language=es&apiKey=${apiKey}&category=${cat}&page_number=${this.categoriaPage}&country =co`;
    return this.httpClient.get<any>(req).pipe(
          finalize(
            () => {
              this.spinners[indiceCategoria].next(false)
            })
    )
  }


}
