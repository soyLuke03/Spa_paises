import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/paisService.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  pais: string = '';
  termino: string  = "";
  paises: Pais[] = [];
  error:boolean = false;

  constructor(private paisService: PaisService) {
    
  }


  encontrarPaises(name: string): void {
    this.paisService.encontrarPaises(name);
  }


  buscar( termino:string):void {
    this.termino=termino;
    const aux = this.pais;
    this.paisService.encontrarPaises(termino)
    .subscribe({
      next: (resp) => {
        this.paises = resp;
        this.error=false;
      },
      error: (error) => {
        this.error=true;
        this.paises = []
      }
    }
    )
    this.pais=""
  }

}
