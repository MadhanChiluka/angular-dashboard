import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../bar-chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private barChart: BarChartService) { }

   private result: any;
  // chartOptions = {
  //   responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  // }
  // labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  // chartData = [];
  // colors = [];
  // onChartClick(event) {
  //   console.log(event);
  // }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // OBJECT FOR datasets WITH EMPTY data.
  // chartData = [
  //   {
  //     label: '1st Year',
  //     data: [], 
  //   },
  //   { 
  //     label: '2nd Year',
  //     data: []
  //   }
  //  ];

   // CHART COLOR.
   colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
   ]

   chartData = [
    {
      label: '1st Year',
     // data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
     data:[] 
    },
    { 
      label: '2nd Year',
      // data: [47, 9, 28, 54, 77, 51, 24]
      data: []
    }
  ];
  
    ngOnInit () {

      this.result = this.barChart.getBarData();
      this.chartData = this.result.data as any [];
        // this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        // data => {
        //     this.chartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        // },
        // (err: HttpErrorResponse) => {
        //     console.log (err.message);
        // }
        // );
    }

  onChartClick(event) {
    console.log(event);
  }

  // ngOnInit() {
  //   this.result = this.barChart.getBarData();
  //   console.log(this.result);
  //   this.labels = this.result.country;
  //   this.chartData = this.result.visits;
  //   this.colors = this.result.color;
  // }

}
