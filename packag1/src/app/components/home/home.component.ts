import { Component } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    public service: CommonService
  ) {
  }
}
