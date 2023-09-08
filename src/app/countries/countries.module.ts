import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContriesRoutingModule } from './contries-routing.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';



@NgModule({
  declarations: [ SelectorPagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContriesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    
  ]
})
export class CountriesModule { }
