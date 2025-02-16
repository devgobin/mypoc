import { DIALOG_DATA, DialogRef, DialogModule } from '@angular/cdk/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, OnInit } from '@angular/core';
import { entIEMessage } from '../../common/api-services/application-api/application-api.classes';
import { InnerScroll } from './core-component.component';
import { CommonModule } from '@angular/common';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [DialogModule, InnerScroll, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="dialog-container">
      <div class="dialog-content">
          <!-- Notification Alert -->
           @if(data.type === 'notification') {
            <div class="notification-header">
              <div class="notification-icon">
                <ion-icon name="warning-outline"></ion-icon>
              </div>
              <div class="notification-title">Alert</div>
            </div>
            <div class="notification-message">
              {{ data.msg }}
            </div>
            <div class="notification-button">
              <button class="btn-notification" (click)="close()">Ok</button>
            </div>
           }
                <!-- Single Error Alert -->
           @if(data.type === 'singleError') {
            <div class="template-header between bg-error">
              <div class="title err-fnt">Error Message</div>
              <div class="icon pointer slot-center err-fnt" (click)="close()">
                <ion-icon name="close-circle-outline"></ion-icon>
              </div>
            </div>
            <div class="template-content">
              <div class="content1">
                {{ data.msg }}
              </div>
            </div>
           }
            <!-- Common Error Alert -->
           @if(data.type === 'commonError') {
            <div class="template-header between bg-error">
              <div class="title err-fnt">Error ({{ data.msg.errorMessage.length }})</div>
              <div class="icon pointer slot-center err-fnt" (click)="close()">
                <ion-icon name="close-circle-outline"></ion-icon>
              </div>
            </div>
            <div class="v-flex pb16" [style.height.px]="calculateContentHeight()">
                  <div class="flex-1 relative">
                      <scroll>
                          <div class="template-content pb0">
                             <ol class="content">
                                @for (item of data.msg.errorMessage; track $index) {
                                  <li>
                                     @if(item.msgType === 2) {
                                        {{ item.msgDescription }}
                                      }
                                  </li>
                                }
                              </ol>
                           </div>
                        </scroll>
                  </div>
            </div>
           }
      </div>
    </div>
  `,

})
export class AlertComponent {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: any,
  ) {
    // console.log(data);

  }

  close() {
    this.dialogRef.close();
  }

  calculateContentHeight(): number {
    const baseHeight = 100; // Base height for up to 1 list item
    const additionalHeightPerItem = 37; // Additional height per list item beyond the first
    const maxItemsToShow = 10; // Maximum number of items to show

    const numItems = this.data.msg.errorMessage.length; // Number of items in the list

    // Calculate the height based on the number of items
    let calculatedHeight = baseHeight + Math.min(numItems - 1, maxItemsToShow - 1) * additionalHeightPerItem;

    return calculatedHeight;
  }

}

@Component({
  selector: 'app-success-info',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatProgressBarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <div class="success-info" >
    <div class="between success-box" [ngClass]="{'success-msg': data.type === 'Success', 'error': data.type === 'Error', 'warning': data.type === 'Warning'}">
        <div class="slot-center">
            <div class="success-icon">
              @if(data.type === "Success") {
                <ion-icon src="assets/svg/success-info.svg"></ion-icon>
              } @else if (data.type === "Error") {
                <ion-icon src="assets/svg/error.svg"></ion-icon>
              } @else if (data.type === "Warning") {
                <ion-icon src="assets/svg/warning.svg"></ion-icon>
              }

            </div>
            <div class="info-content">
                <div class="head-1">{{data.type}}</div>
                <div class="head-2">{{data.msg}}</div>
            </div>
        </div>
        <div class="success-close" (click)="dismiss()">
            <ion-icon name="close-outline"></ion-icon>
        </div>
    </div>
    <!-- <mat-progress-bar id="progress-bar" mode="determinate" [value]="progress" color="warn" class="progress"></mat-progress-bar> -->
  </div>
  `,
})

export class SuccessInfoComponent implements OnInit {

  progress = 100;
  currentIntervalId: any = null;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackbar: MatSnackBar,
    private snackBarRef: MatSnackBarRef<SuccessInfoComponent>) {
    // console.log(data);

    this.snackBarRef.afterOpened().subscribe(() => {
      // const duration = 3700; // Duration set to 3 seconds (3000 milliseconds)
      // this.runProgressBar(duration);
    });
  }

  ngOnInit(): void { }

  dismiss(): void {
    this.snackbar.dismiss();
  }

  private runProgressBar(duration: number): void {
    this.progress = 100;
    const step = 30;
    const decrement = (100 / duration) * step;

    this.clearProgressBarInterval();

    this.currentIntervalId = setInterval(() => {
      this.progress = Math.max(0, this.progress - decrement);
      if (this.progress <= 0) {
        this.clearProgressBarInterval();
      }
    }, step);
  }

  private clearProgressBarInterval(): void {
    if (this.currentIntervalId) {
      clearInterval(this.currentIntervalId);
      this.currentIntervalId = null;
    }
  }
}
