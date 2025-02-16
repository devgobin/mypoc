import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRecommendationContentComponent } from './investor-recommendation-content.component';

describe('InvestorRecommendationContentComponent', () => {
  let component: InvestorRecommendationContentComponent;
  let fixture: ComponentFixture<InvestorRecommendationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorRecommendationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorRecommendationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
