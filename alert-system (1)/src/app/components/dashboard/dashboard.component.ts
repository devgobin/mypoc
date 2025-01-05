import { Component } from '@angular/core';
import { CommonService } from '../../common/common.service';

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
}
