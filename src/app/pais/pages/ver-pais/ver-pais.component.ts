import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaServiceService } from '../../services/spa-service.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private spaService:SpaServiceService) {
    console.log(route.snapshot.params['id']);
  }



  ngOnInit(): void {
  }

}
