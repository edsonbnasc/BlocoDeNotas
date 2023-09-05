import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nota-criada',
  templateUrl: './nota-criada.component.html',
  styleUrls: ['./nota-criada.component.css']
})
export class NotaCriadaComponent {
  @Input() nota = {
    titulo:"teste",
    conteudo: 'Angular é muito bom!',
    tipo: 'tipo1'
  }

}
