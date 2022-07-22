import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import{take, filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  private titleSubs$: Subscription;
  constructor(private Router:Router) { 

    this.titleSubs$ = this.getRouteArguments().subscribe(({title})=>{
      this.title = title
      document.title = `AdminPro - ${title}`;
    });
    
  }

  getRouteArguments(){
    return this.Router.events.pipe(
      filter(event=>event instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd)=> event.snapshot.data)
    )
  }

  ngOnDestroy(): void { 
    this.titleSubs$.unsubscribe();
  }

}
