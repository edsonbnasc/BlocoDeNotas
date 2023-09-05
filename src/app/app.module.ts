import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NovaNotaComponent } from './nova-nota/nova-nota.component';
import { MenuComponent } from './menu/menu.component';
import { NotaCriadaComponent } from './nota-criada/nota-criada.component';
import { CorpoComponent } from './corpo/corpo.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuComponent,
    NovaNotaComponent,
    NotaCriadaComponent,
    CorpoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
