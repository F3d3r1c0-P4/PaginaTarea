import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
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
    component: QueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
