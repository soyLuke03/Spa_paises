import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegionService {
  private url = 'https://restcountries.com/v3.1/'
  private _paises: Pais[] = [];


  constructor(private http: HttpClient) { }

  get paises(): Pais[] {
    return [...this._paises]
  }

  encontrarRegion(regionName: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + "region/" + regionName)
  }

  encontrarAlpha(regionName: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url + "alpha/" + regionName)
  }

}