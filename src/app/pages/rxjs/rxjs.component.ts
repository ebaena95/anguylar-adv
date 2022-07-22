import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, interval, Subscriber, Subscription } from 'rxjs';
import{take, retry, skip, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscriptions : Subscription[] = [];
  constructor() {
   

    // this.returnAnObserbable().pipe(retry(1)).subscribe(
    //   valor=> console.log(valor),
    //   error=>console.log(error),
    //   ()=>console.log('acabat')    
    // );


    this.suscriptions.push(this.returnInterval().subscribe(console.log));
   }

  ngOnInit(): void {
  }


  returnInterval(): Observable<string>{

    return interval(500).pipe(skip(1),filter(value => value % 2 === 0), map(value=>'hey ' + (value)));
  }
  
  returnAnObserbable():Observable<number>{
    let i = 0;
    return new Observable<number>(ob=>{

      
      const iterval1 = setInterval(()=>{

        i++;

        ob.next(i);

        if(i === 4){
          clearInterval(iterval1)
          ob.complete();
        }

        if(i === 2 ){
          console.log('error');
          
           ob.error('error');
        }
      })


    });

  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(susbcrive => {
      susbcrive.unsubscribe();
    });
  }

}
