import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  private _regions : Region[]=[Region.Africa, Region.Americas, Region.Asia, Region.Europa, Region.Oceania ]
  constructor() { }

  get regions(): Region[]{
    return [...this._regions];
  }

  getountriesByRegion(region:Region):SmallCountry[]{

    
    return[];

  }

}
