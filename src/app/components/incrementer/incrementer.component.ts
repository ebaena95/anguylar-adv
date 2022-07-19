import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  ngOnInit(): void {
   this.btnClass =  'btn ' + this.btnClass;
  }

  // Per canviar el nom que ve des del html del pare
  // @Input('value') progres: number = 50;
  @Input() progres: number = 50;
  @Input() btnClass: string= 'btn-primary'

  @Output() changeProgress = new EventEmitter<number>();


  

  changeValue(value: number): void{
    if(this.progres >= 100 && value >= 0){
      this.changeProgress.emit(100);
      this.progres = 100;
      return
    }
    if(this.progres === 0 && value < 0){
      this.changeProgress.emit(0);
      this.progres = 0;
      return
    }
    this.progres = this.progres + value;
    this.changeProgress.emit(this.progres);
  }

  onChange(value :number){

    if(value >= 100){
      this.progres = 100;
    }else if(value <= 0){
      this.progres = 0;
    }else{
      this.progres = value;
      this.changeProgress.emit(value);
    }
    
  }

}
