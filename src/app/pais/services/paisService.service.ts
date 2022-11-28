import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private url = 'https://restcountries.com/v3.1/'
  private _paises: Pais[] = [];


  constructor(private http: HttpClient) { }

  get paises(): Pais[] {
    return [...this._paises]
  }

  encontrarPaises(countryName: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + "name/" + countryName)
  }

  encontrarAlpha(countryName: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + "alpha/" + countryName)
  }

}
