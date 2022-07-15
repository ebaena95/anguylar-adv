import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progres: number = 50;


  get getPercentage(){
    return this.progres + '%';
  }

  changeValue(value: number): void{
    if(this.progres >= 100 && value >= 0){
      this.progres = 100;
      return
    }
    if(this.progres === 0 && value < 0){
      this.progres = 0;
      return
    }
    this.progres = this.progres + value;
  }

}
