import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../services/regionService.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent implements OnInit {

  constructor(private regionService:RegionService) { }

  region: string = '';
  termino: string  = "";
  paises: Pais[] = [];
  error:string = "";

  ngOnInit(): void {
  }

  encontrarCapital(name: string): void {
    this.regionService.encontrarRegion(name);
  }


  buscar( termino:string):void {
    this.termino=termino;
    const aux = this.region;
    this.regionService.encontrarRegion(termino)
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
    this.region=""
  }

}
