import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from './notas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private readonly API='http://localhost:3000/notas'
  constructor(private http:HttpClient) { }


  listar():Observable<Nota[]>
  {
    return this.http.get<Nota[]>(this.API);  //retorna um array de notas, o tipo da variavel é
  }
  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API, nota)
  }

}
