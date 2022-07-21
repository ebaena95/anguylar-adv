import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private links : NodeListOf<Element>;
  private linktheme = document.querySelector('#theme');
  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/default.css'
    this.linktheme?.setAttribute('href', url);
  }
  setLinks(links){
    this.links = links;
  }
  getLinks():NodeListOf<Element>{
    return this.links;
  }
  ChangeTheme(theme:string):void{
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linktheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrent(this.links);
  }
  checkCurrent(links):void{ 
    links.forEach(elementHTML => {
      elementHTML.classList.remove('working');
      const btnTheme = elementHTML.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme  = this.linktheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        elementHTML.classList.add('working');
      }

    });
  }
}
