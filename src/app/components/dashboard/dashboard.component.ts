import { Component } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    constructor(
      public service: CommonService
    ){
      this.service.title = 'Dashboard'
    }

    ngAfterViewInit() {
      new Chart('sleepChart', {
        type: 'line',
        data: {
          labels: ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00'],
          datasets: [{
            label: 'Deep Sleep',
            data: [5, 8, 12, 6, 9, 7],
            borderColor: '#4A90E2',
            fill: false,
          }]
        }
      });
    }
}
