import { Component } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {
  listaNotas = [
    {
      titulo:"Titulo 1",
        conteudo: 'Angular é estranho',
        tipo: 'tipo1'
    },
    {
      titulo:"Titulo 2",
      conteudo: 'Angular é estranho',
      tipo: 'tipo1'
    }
];
}

