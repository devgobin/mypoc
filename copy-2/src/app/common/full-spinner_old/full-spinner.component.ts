import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FullSpinnerService } from './full-spinner.service';

@Component({
  selector: 'app-full-spinner',
  standalone: true,
  imports: [CommonModule, OverlayModule, MatProgressBarModule],
  templateUrl: './full-spinner.component.html',
  styleUrl: './full-spinner.component.scss',
  providers: [FullSpinnerService],
})
export class FullSpinnerComponent {

}


@Component({
  selector: 'app-empty-spinner',
  template: '<div class="p-box pt68"><mat-progress-bar mode="indeterminate"></mat-progress-bar></div>',
  styleUrls: ['./full-spinner.component.scss'],
  imports: [MatProgressBarModule],
  standalone: true
})
export class EmptySpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
