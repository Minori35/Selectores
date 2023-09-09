import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from "@angular/forms";
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/countries.interface';
import { Observable, filter, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit {

  public countriesByRegion : SmallCountry[] =[]
  public bordesByCountries : SmallCountry[] =[]


  public myForm : FormGroup = this.fb.group({
    region : ['', Validators.required],
    country : ['', Validators.required],
    border : ['', Validators.required],


  })
  constructor(
    private fb: FormBuilder,
    private countriesServices : CountriesService
  ){}

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }


  get regions(): Region[]{
    return this.countriesServices.regions;
  }

   onRegionChange(){
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(()=> this.myForm.get('country')!.setValue('')),
      switchMap( region => this.countriesServices.getountriesByRegion(region))
    )
    .subscribe(countries =>{
      this.countriesByRegion= countries;
    });
  }


  onCountryChange(){
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(()=> this.myForm.get('border')!.setValue('')),
      filter((value : string) =>  value.length >0),
      switchMap( alphaCode => this.countriesServices.getCountryAlphaCode(alphaCode)),
      switchMap( (country => this.countriesServices.getCountryBordesByCodes(country.borders)))
    )
    .subscribe(countries =>{
      this.bordesByCountries =countries
      
    });
  }


}
