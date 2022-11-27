import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Paises, Name } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class SpaServiceService {

  constructor(private http: HttpClient) { }

  private url:string = "https://restcountries.com/v3.1/";
  private _listaPaises:string[] = [];
  //Se trabaja con este
  results!:Name

  get listaPaises(){ 
    return [...this._listaPaises];
}
  
  buscarPais(query:string):void{
    let cleanQuery = query.trim();
    this._listaPaises.unshift(cleanQuery)


    const param = new HttpParams()
    .set('q',cleanQuery)

    this.http.get<Paises>(this.url+param)
    .subscribe((resp) => this.results = resp.name)
    
  }


}