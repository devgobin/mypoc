import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestorPermitSearchComponent } from './view-investor-permit-search.component';

describe('ViewInvestorPermitSearchComponent', () => {
  let component: ViewInvestorPermitSearchComponent;
  let fixture: ComponentFixture<ViewInvestorPermitSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInvestorPermitSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInvestorPermitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
