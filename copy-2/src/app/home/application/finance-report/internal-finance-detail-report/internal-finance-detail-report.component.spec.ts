import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFinanceDetailReportComponent } from './internal-finance-detail-report.component';

describe('InternalFinanceDetailReportComponent', () => {
  let component: InternalFinanceDetailReportComponent;
  let fixture: ComponentFixture<InternalFinanceDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalFinanceDetailReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalFinanceDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
