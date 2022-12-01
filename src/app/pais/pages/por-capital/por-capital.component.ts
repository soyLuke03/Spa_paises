import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capitalService.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  capital: string = '';
  termino: string  = "";
  paises: Pais[] = [];
  error:string = "";

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
  }

  encontrarCapital(name: string): void {
    this.capitalService.encontrarCapital(name);
  }


  buscar( termino:string):void {
    this.termino=termino;
    const aux = this.capital;
    this.capitalService.encontrarCapital(termino)
    .subscribe({
      next: (resp) => {
        this.paises = resp;
        this.error="";
      },
      error: () => {
        this.paises = []
        this.error=aux;
      }
    }
    )
    this.capital=""
  }

}
