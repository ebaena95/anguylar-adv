import { Component, OnInit } from '@angular/core';
import{SettingsService} from '../services/settings.service';

declare function custimInitFunctions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  
  constructor(private SettingsService:SettingsService) { }

  ngOnInit(): void {
   custimInitFunctions();
  }

}
