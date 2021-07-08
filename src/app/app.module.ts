import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { CaraDePantallaComponent } from './components/cara-de-pantalla/cara-de-pantalla.component';
import { ContadorComponent } from './components/contador/contador.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './components/query/query.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    CaraDePantallaComponent,
    ContadorComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
