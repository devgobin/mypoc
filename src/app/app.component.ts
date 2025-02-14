import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showSidebar = this.router.url !== '/login';
    });
  }
  title = 'alert-system';
  isOpened: boolean = false;

  onRouterLinkActive(event: any) {
    console.log(event)
  }
}
