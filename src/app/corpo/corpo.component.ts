import { Component } from '@angular/core';
import { Nota } from '../componentes/notas';
import { NotaService } from '../componentes/nota.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {
  constructor(private service: NotaService){}

  listaNotas:Nota[] = [
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
ngOnInit():void{
  this.service.listar().subscribe((listaNotas)=>{
    this.listaNotas = listaNotas
  })
}
}

