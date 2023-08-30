import { Component } from '@angular/core';

@Component({
  selector: 'app-nota-criada',
  templateUrl: './nota-criada.component.html',
  styleUrls: ['./nota-criada.component.css']
})
export class NotaCriadaComponent {
  nota = {
    titulo: "NOVA NOTA",
    conteudo: "TESTE",
    tipo: "tipo1"
  }
}
