import { Component, OnInit } from '@angular/core';
import{SettingsService} from '../../services/settings.service'

@Component({
  selector: 'app-accound-settings',
  templateUrl: './accound-settings.component.html',
  styles: [
  ]
})
export class AccoundSettingsComponent implements OnInit {

  constructor(private SettingsService:SettingsService) { }

  ngOnInit(): void {  
    this.SettingsService.setLinks(document.querySelectorAll('.selector'));
    this.SettingsService.checkCurrent(this.SettingsService.getLinks());
  }

  ChangeTheme(theme:string):void{ 
    this.SettingsService.ChangeTheme(theme);
  }

  

}
