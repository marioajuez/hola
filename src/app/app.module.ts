import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';


import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';




@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [

    LazyLoadImageModule,

    IonicStorageModule.forRoot({
      driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
    }),

    SuperTabsModule.forRoot(),

    // services
    HttpClientModule,
    ComponentsModule,
    // -----
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
