import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  @Output() paisEvento:EventEmitter<string> = new EventEmitter();
  pais:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitPais() {
    this.paisEvento.emit(this.pais);
    this.pais = '';
  }

}
