import { NgClass } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-placer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-placer.component.html',
  styleUrl: './input-placer.component.scss'
})
export class InputPlacerComponent implements AfterViewInit {
  @Input() data: any;
  @Input() isChecked = false;
  @Output() dataChange = new EventEmitter<any>;
  processData: any = [];
  @Input() binder: any = [];
  @Input() readonly = false;
  @Input() errorTrue = false;
  ngAfterViewInit() {
    // console.log(this.data);
    setTimeout(() => {
      // console.log(this.data);
      
      if (this.data && this.data.reasonDescription !== '') {
        this.processData = this.data.reasonDescription.split('<span></span>');
        // console.log(this.processData);
        // console.log(this.binder);
      }
    }, 500);

  }

  valueChanged(event: any, binderKey: any) {
    // console.log(event.target.value);
    this.data[binderKey] = event.target.value;
    this.dataChange.emit(this.data);
  }

}
