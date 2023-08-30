import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaNotaComponent } from './nova-nota/nova-nota.component';
import { NotaCriadaComponent } from './nota-criada/nota-criada.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent
  },

  {
    path:'nova-nota',
    component:NovaNotaComponent
  },
  {
    path:'nota-criada',
    component:NotaCriadaComponent
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
