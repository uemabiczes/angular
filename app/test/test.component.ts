import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  chart = new Chart();
  regex = '\d.\d';
  all_points: Array<Point> = [];
  x: number = 1;
  y: number;
  constructor() { }

  addNew() {
    console.log(this.chart.dataset[0].data.length);
    if (this.chart.dataset[0].data.length < 10){
      this.all_points.push(new Point(this.x, this.y));
      this.chart.setData(this.all_points);
    } else{
      alert('Nie można dodać więcej.');
    }


  }

  ngOnInit() {
  }
}

class Point{
  constructor(public x_coord:number, public y_coord:number){
  }
}

class Chart {
  labels: Array<any>  = [1,2,3,4,5,6,7,8,9,10];
  dataset: Array<any> = [
    {data: [], label: 'SET - A'},
  ];
  type: string = 'line';

  setData(points: Array<Point>) {
    console.log('##PRZED: All x_corrds: ' + this.labels);
    this.labels = points.map(p => p.x_coord );
    console.log('All x_corrds: ' + this.labels);
    this.dataset = [
      {
        data: points.map(p => p.y_coord),
        label: 'Set A'
      }
    ];
    console.log(this.dataset[0]);
    console.dir('All y_corrds: ' + this.dataset[0].data);
    console.dir('All y_corrds: ' + this.dataset[0].label);



  }

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

public options: any = {
    responsive: true
  };

}

