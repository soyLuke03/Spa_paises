import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/paisService.service';
import { Pais } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capitalService.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  _paises: Pais[] = [];
  error: boolean = false;



  constructor(private route: ActivatedRoute,private capitalService:CapitalService , private paisService: PaisService) { 
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
