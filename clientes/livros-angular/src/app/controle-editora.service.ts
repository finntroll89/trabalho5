import {Injectable, OnInit} from '@angular/core';
import {Editora} from "./editora";

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  public edts: Array<Editora> = [
    (new Editora(1,'Editora Becalete')),
    (new Editora(2,'Editora Dialética')),
    (new Editora(3,'Editora Ariel'))
  ]

  constructor() {}

  public getEditoras():Array<Editora>{
    return this.edts
  }

  public getNomeEditora(codEditora:number){
    const nomeEditora = this.edts.filter((editora)=>editora.codEditora === codEditora)
    return nomeEditora.length > 0 ? nomeEditora[0].nome : 'Desconhecida';
  }
}
