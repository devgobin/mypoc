import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class AppButton implements AfterViewInit {
  @Input() appButton = "";
  @Input() name = "";
  @Input() src = "";
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {

  }
  ngAfterViewInit(): void {
    let iconHtml = '';
    if (this.name) {
      iconHtml = `<ion-icon name="${this.name}"></ion-icon>`;
    } else if (this.src) {
      iconHtml = `<ion-icon src="${this.src}"></ion-icon>`;
    }
    let html = `<div class="btn-text">${this.appButton}</div>${iconHtml}`
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  }
}

@Directive({
  selector: '[stepTitle]',
  standalone: true
})
export class StepItem implements AfterViewInit {
  @Input() count = "";
  @Input() stepTitle = "";
  __status = "";
  @Input() set status(status: string) { this.__status = status; this.init(); }
  get status() { return this.__status; }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {

  }
  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    let statusString = this.__status.replace('-', ' ');
    statusString === '' ? statusString = 'Not Started' : '';
    let html = `
      <div class="step-count">${this.count}</div>
      <div class="step-text">
        <div class="step-title">${this.stepTitle}</div>
        <div class="step-status">${statusString}</div>
      </div>
    `;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
    if (this.__status !== '') {
      // remove all the class in el
      this.el.nativeElement.classList.remove(...this.el.nativeElement.classList);
      this.renderer.addClass(this.el.nativeElement, this.__status);
    }
  }
}
