import { Component, OnInit } from '@angular/core';
import { HeaderTemplate } from '../common/templates/header-template';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InnerScroll } from '../app-core/core-component/core-component.component';
import { DataService } from '../common/services/data/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderTemplate, CommonModule, RouterModule, InnerScroll],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(public data:DataService) {

  }

  async ngOnInit(): Promise<void> {
    await this.data.getToken();
  }

  

}
