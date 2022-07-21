import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../routes/app-routing.module';
import { AccoundSettingsComponent } from './accound-settings/accound-settings.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    AccoundSettingsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    
    
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent,
    AccoundSettingsComponent

  ]
})
export class PagesModule { }
