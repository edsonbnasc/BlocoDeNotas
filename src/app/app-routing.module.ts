import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaNotaComponent } from './nova-nota/nova-nota.component';
import { NotaCriadaComponent } from './nota-criada/nota-criada.component';

import { CorpoComponent } from './corpo/corpo.component';

const routes: Routes = [
  {
    path:'corpo',
    component:CorpoComponent
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
    redirectTo:'corpo',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
