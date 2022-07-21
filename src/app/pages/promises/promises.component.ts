import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(users=>{
      console.log(users);
      
    });

  //   const promise = new Promise((resolve, reject)=>{

  //     if(false){
  //       resolve('hola');
  //     }else{
  //       reject('wro0ng')
  //     }
      
  //   });

  //   promise.then((message)=>{
  //     console.log(message);
      
  //     console.log('he acabat');
      
  //   }).catch(error=>('error ' + error))

  //   console.log('init fi');
    
   }

   getUsuarios():Promise<any>{

    const usersPromise = new Promise(resolve=>{
      fetch('https://reqres.in/api/users')
        .then(res=> res.json())
        .then(body => resolve(body.data)); 
    })

    return usersPromise
    
   }

}
