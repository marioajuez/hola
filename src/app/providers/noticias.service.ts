/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaHeadLines } from '../interfaces/noticias.interface';
import { noticias_json } from './json';

import { finalize} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// const 

const apiKey = environment.apikey;
const apiUrl= environment.apiUrl;

// const headers = new HttpHeaders({
//    Authorization: apiKey
// })

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {

  constructor(private http: HttpClient) {
  }

  private ejecutarQuery<T>(query: string, spinner?)
  {
      query = `${apiUrl}?language=es&apiKey=${apiKey}${query}`;

        return this.http.get<T>(query)
        .pipe(
          finalize(
            () => {
              spinner.next(false);
            })
      );
  }

  public getTopHeadlines(pageNew, spinner?:any)
  {
      return this.ejecutarQuery<RespuestaHeadLines>(`&page_number=${pageNew}&country=co`, spinner);
  }

  public getTopHeadlinesCategoria(categoria: string, categoriaPage?, categoriaSpinner?:any){
      return this.ejecutarQuery<RespuestaHeadLines>(`&page_number=${categoriaPage}&category=${categoria}`, categoriaSpinner)
  }
  getNoticias3() {
    return noticias_json
  }

}
