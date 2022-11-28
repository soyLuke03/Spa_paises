import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/paisService.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  termino: string = '';
  paises!: Pais[];

  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    console.log(route.snapshot.params['id']);
    
  }

  ngOnInit(): void {
    this.buscar(this.route.snapshot.params['id'])
    this.pais =this.paises[0]
  }

  buscar( termino:string):void {
    this.termino=termino;
    this.paisService.encontrarAlpha(termino)
    .subscribe({
      next: (resp) => {
        this.paises = resp;
      },
      error: () => {

      }
    }
    )
  }

}
