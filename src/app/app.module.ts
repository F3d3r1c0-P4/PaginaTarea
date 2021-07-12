import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { CaraDePantallaComponent } from './components/cara-de-pantalla/cara-de-pantalla.component';
import { ContadorComponent } from './components/contador/contador.component';
import { QueryComponent } from './components/query/query.component';
import { Error404Component } from './components/error404/error404.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    CaraDePantallaComponent,
    ContadorComponent,
    QueryComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
