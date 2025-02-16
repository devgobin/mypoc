import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { NEVER, Subject, defer, finalize, map, scan, share } from 'rxjs';
import { EmptySpinnerComponent, FullSpinnerComponent } from './full-spinner.component';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FullSpinnerService {
  private spinnerTopRef = this.cdkSpinnerCreate();
  private spinnerTopRefLight = this.cdkSpinnerCreateLight();
  spin: Subject<boolean> = new Subject();
  empty: Subject<boolean> = new Subject();
  constructor(private overlay: Overlay, public router: Router) {
    this.spin
      .asObservable()
      .pipe(
        map((val) => (val ? 1 : -1)),
        scan((acc: any, one: any) => (acc + one >= 0 ? acc + one : 0), 0)
      )
      .subscribe((res: any) => {
        if (res === 1) {
          this.showSpinner();
        } else if (res === 0) {
          // tslint:disable-next-line: no-unused-expression
          this.spinnerTopRef.hasAttached() ? this.stopSpinner() : null;
        }
      });
    this.empty
      .asObservable()
      .pipe(
        map((val: any) => (val ? 1 : -1)),
        scan((acc: any, one: any) => (acc + one >= 0 ? acc + one : 0), 0)
      )
      .subscribe((res: any) => {
        if (res === 1) {
          this.showEmptySpinner();
        } else if (res === 0) {
          // tslint:disable-next-line: no-unused-expression
          this.spinnerTopRefLight.hasAttached()
            ? this.stopEmptySpinner()
            : null;
        }
      });
  }

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }
  private cdkSpinnerCreateLight() {

    // const path =
    // g(this.router.url);
    return this.overlay.create({
      width: '100%',
      hasBackdrop: true,
      backdropClass: 'no-backdrop',
      panelClass: this.router.url === '/login' ? 'no-panel-pad' : '',
      positionStrategy: this.overlay.position().global(),
      // .centerHorizontally()
      // .centerVertically()
    });
  }

  private showEmptySpinner() {
    // g('attach');
    this.spinnerTopRefLight.attach(new ComponentPortal(EmptySpinnerComponent));
  }

  private showSpinner() {
    // g('attach');
    this.spinnerTopRef.attach(new ComponentPortal(FullSpinnerComponent));
  }

  private stopSpinner() {
    // g('dispose');
    this.spinnerTopRef.detach();
  }
  private stopEmptySpinner() {
    // g('dispose');
    this.spinnerTopRefLight.detach();
  }

  public readonly emptySpinner = defer(() => {
    this.showEmptySpinner();
    return NEVER.pipe(
      finalize(() => {
        this.spinnerTopRefLight.hasAttached() ? this.stopEmptySpinner() : null;
      })
    );
  }).pipe(share());
}
