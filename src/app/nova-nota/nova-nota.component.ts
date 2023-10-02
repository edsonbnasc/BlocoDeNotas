import { Component } from '@angular/core';
import { NotaService } from '../componentes/nota.service';
import { Nota } from '../componentes/notas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-nota',
  templateUrl: './nova-nota.component.html',
  styleUrls: ['./nova-nota.component.css']
})
export class NovaNotaComponent {
  constructor( private service: NotaService,private router: Router ){}
  nota:Nota = {
    
    conteudo: "",
    tipo: "tipo1"
  }
  criarNota(){
    this.service.criar(this.nota).subscribe(() =>{
      this.router.navigate(['/corpo'])
    })
  }


}
