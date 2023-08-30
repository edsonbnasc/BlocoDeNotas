import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-nota',
  templateUrl: './nova-nota.component.html',
  styleUrls: ['./nova-nota.component.css']
})
export class NovaNotaComponent {
  nota = {
    titulo: "NOVA NOTA",
    conteudo: "TESTE",
    tipo: "tipo1"
  }
}
