import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorPermitDetailComponent } from './investor-permit-detail.component';

describe('InvestorPermitDetailComponent', () => {
  let component: InvestorPermitDetailComponent;
  let fixture: ComponentFixture<InvestorPermitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorPermitDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorPermitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
