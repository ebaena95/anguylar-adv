import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccoundSettingsComponent } from './accound-settings/accound-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes:Routes=[

{
    path:'dashboard', component:PagesComponent,
        children:[
        {path:'', component:DashboardComponent, data:{title:'Dashboard'}},
        {path:'progress', component:ProgressComponent , data:{title:'Progress'}},
        {path:'graphic1', component:Graphic1Component, data:{title:'Graphic #1'}},
        {path:'accound-settings', component:AccoundSettingsComponent, data:{title:'Acounds settings'}},
        {path:'promises', component:PromisesComponent, data:{title:'Promises'}},
        {path:'rxjs', component:RxjsComponent, data:{title:'Rxjs'}},
        ]
  },

];


@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class PagesRoutingModule{}