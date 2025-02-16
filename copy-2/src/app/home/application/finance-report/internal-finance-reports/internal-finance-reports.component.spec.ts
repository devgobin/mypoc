import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFinanceReportsComponent } from './internal-finance-reports.component';

describe('InternalFinanceReportsComponent', () => {
  let component: InternalFinanceReportsComponent;
  let fixture: ComponentFixture<InternalFinanceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalFinanceReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalFinanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
