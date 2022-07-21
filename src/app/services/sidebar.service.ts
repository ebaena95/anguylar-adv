import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {title: 'Dashboard',
     icon : '<i class="mdi mdi-gauge"></i>',
     submenu:[
      {title:'Main', url:'/'},
      {title:'Graphics', url:'graphic1'},
      {title:'Rxjs', url:'rxjs'},
      {title:'Promises', url:'promises'},
      {title:'Progress', url:'progress'},

     
     ]
    }
  ]
  constructor() { }
}
