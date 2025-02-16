import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestorPermitDetailComponent } from './view-investor-permit-detail.component';

describe('ViewInvestorPermitDetailComponent', () => {
  let component: ViewInvestorPermitDetailComponent;
  let fixture: ComponentFixture<ViewInvestorPermitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInvestorPermitDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInvestorPermitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
