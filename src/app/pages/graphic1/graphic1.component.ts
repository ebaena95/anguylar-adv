import { Component } from '@angular/core';


@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component  {

  protected title = 'Sellings';
  protected title2 = 'Other';
  protected doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  protected doughnutChartLabels2: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  protected doughnutChartData: [number[]] =  [
    [ 350, 450, 100 ]
];
protected doughnutChartData2: [number[]] =  [
  [ 200, 600, 200 ]
];

}
