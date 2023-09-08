import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesModule } from './countries.module';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';

const routes: Routes = [
    {
        path: '',
        children:[
            {path : 'selector', component : SelectorPagesComponent},
            {path : '*', redirectTo:'selector'},

        ]
    },
    {
        path: '**',
        redirectTo:''
    }
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class ContriesRoutingModule { }