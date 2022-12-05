import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/paisService.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input() _paises: Pais[] = [];
  error: boolean = false;



  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    console.log(route.snapshot.params['id']);
    
  }

  ngOnInit(): void {
    this.buscar();
  }

  get pais():Pais {
    return this._paises[0]
  }
  

  buscar():void {
    this.paisService.encontrarAlpha(this.route.snapshot.params['id'])
    .subscribe({
      next: (resp) => {
        this._paises = resp;
        this.error=false;
      },
      error: () => {
        this.error=true;
      }
    }
    )
  }
}
