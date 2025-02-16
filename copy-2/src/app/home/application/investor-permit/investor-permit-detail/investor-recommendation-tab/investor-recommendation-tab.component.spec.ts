import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRecommendationTabComponent } from './investor-recommendation-tab.component';

describe('InvestorRecommendationTabComponent', () => {
  let component: InvestorRecommendationTabComponent;
  let fixture: ComponentFixture<InvestorRecommendationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorRecommendationTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorRecommendationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
