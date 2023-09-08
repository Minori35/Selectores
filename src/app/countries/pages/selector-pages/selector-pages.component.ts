import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from "@angular/forms";
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/countries.interface';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit {

  public countriesByRegion : SmallCountry[] =[]

  public myForm : FormGroup = this.fb.group({
    region : ['', Validators.required],
    country : ['', Validators.required],
    borders : ['', Validators.required],


  })
  constructor(
    private fb: FormBuilder,
    private countriesServices : CountriesService
  ){}

  ngOnInit(): void {
    this.onRegionChange();
  }


  get regions(): Region[]{
    return this.countriesServices.regions;
  }

   onRegionChange(){
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap( region => this.countriesServices.getountriesByRegion(region))
    )
    .subscribe(countries =>{
      this.countriesByRegion= countries;
    });
  }

}
