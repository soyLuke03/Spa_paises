import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/paisService.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  capital: string = '';
  termino: string  = "";
  paises: Pais[] = [];
  error:boolean = false;

  constructor(private capitalService: PaisService) { }

  ngOnInit(): void {
  }

  encontrarCapital(name: string): void {
    this.capitalService.encontrarCapital(name);
  }


  buscar( termino:string):void {
    this.termino=termino;
    this.capitalService.encontrarCapital(termino)
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
    this.capital=""
  }

}
