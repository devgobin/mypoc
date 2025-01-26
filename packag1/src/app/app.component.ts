import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alert-system';
  isOpened: boolean = false;

  onRouterLinkActive(event: any){
    console.log(event)
  }
}
