import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorPermitSearchComponent } from './investor-permit-search.component';

describe('InvestorPermitSearchComponent', () => {
  let component: InvestorPermitSearchComponent;
  let fixture: ComponentFixture<InvestorPermitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorPermitSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorPermitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
