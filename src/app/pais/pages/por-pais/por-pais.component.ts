import { Component, OnInit } from '@angular/core';
import { SpaServiceService } from '../../services/spa-service.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  textoEntrada:string = " ";

  constructor(private spaService:SpaServiceService) { }

  ngOnInit(): void {
  }

  addTexto(texto:string){
    this.spaService.buscarPais(texto)
    this.textoEntrada = ""
  }

}
