import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { Error404Component } from './components/error404/error404.component';
import { QueryComponent } from './components/query/query.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/'
  },
  {
    path: 'contador',
    component: ContadorComponent

  },
  {
    path: 'query',
    component: QueryComponent,
  },
  {
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
