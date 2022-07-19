import { Component, Input} from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent  {

  constructor() { }

  @Input() title = 'No title'
  @Input() doughnutChartLabels: Label[] = [ 'none', 'none', 'none' ];
  @Input() doughnutChartData: MultiDataSet =  [
      [0 , 0, 0]
  ];

  public colors: Color[] = [{
    backgroundColor: ['#6857E6', '#009FEE', '#F02059']
  }];

  

  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}
