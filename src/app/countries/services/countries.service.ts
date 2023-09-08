import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";


import { Country, Region, SmallCountry } from '../interfaces/countries.interface';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string = 'https://restcountries.com/v3.1';
  
  private _regions : Region[]=[Region.Africa, Region.Americas, Region.Asia, Region.Europa, Region.Oceania ]
  constructor( private http: HttpClient) { }

  get regions(): Region[]{
    return [...this._regions];
  }

  getountriesByRegion(region:Region):Observable<SmallCountry[]>{

    if(!region) return of([]);

    const url : string= `${this.baseUrl}/region/${region}??fields=cca3,name,borders`


    return this.http.get<SmallCountry[]>(url).
      pipe(
        map(countries => countries.map(country =>({
          name: country.name.common,
          cca3: country.cca3,
          //?? 4.7 en las versiones de angular
          borders: country.borders?? []
        }))),
      )

  }

}
