import { Component } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = 'Dashboard'
  constructor(
    public service: CommonService
  ){

  }
}
