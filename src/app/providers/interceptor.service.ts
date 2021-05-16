import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, switchMap, tap, map } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({ 
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  //   // this.loaderService.isLoading.next(true);

  //   return next.handle(req).pipe(

  //     finalize(
  //       () => {
  //         this.loaderService.isLoading.next(false);
  //       }
  //     )
  //   );
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { 
      if (event instanceof HttpResponse) {
        this.loaderService.isLoading.next(false);
      }
    },
      (err: any) => {
        console.log(err);
        // this.onEnd();
    }));
  }
}


