import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  pais: string = '';

  constructor(private paisService: PaisService) {
    
  }

  get paises(): Pais[] {
    return this.paisService.countries;

  }

  encontrarPaises(name: string): void {
    this.paisService.encontrarPais(name);
  }

}
