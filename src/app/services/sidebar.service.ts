import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {title: 'Dashboard',
     icon : '<i class="mdi mdi-gauge"></i>',
     submenu:[
      {title:'main', url:'/'},
      {title:'Progress', url:'progress'},
      {title:'graphic1', url:'graphic1'}
     ]
    }
  ]
  constructor() { }
}
