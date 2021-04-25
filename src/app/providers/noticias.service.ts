import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaHeadLines } from '../interfaces/noticias.interface';
import { noticias_json } from './json';




const apiKey = '1reP0_nL4m0SAJV9QO-2Wh1U-LGaQMwt3zKhhPLXI705NlND'
const apiKey2 = '3ce4bc4186834f66b686ddb48b27f7d1'
// const apikey3 = "3ce4bc4186834f66b686ddb48b27f7d1"

// const headers = new HttpHeaders({
//    Authorization: apiKey
// })

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor(private httpClient: HttpClient){}
  getNoticias(){
      return this.httpClient.get<RespuestaHeadLines>(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&language=es&country=co&page_number=1`)
  }
  getNoticias2(){
     return this.httpClient.get<RespuestaHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}`)
  }
  getNoticias3(){
    return noticias_json
  // return this.httpClient.get<RespuestaHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}`)
}
  // getNoticias3(){
  //   return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=co&apiKey=${apiKey3}`)
  // }
}
