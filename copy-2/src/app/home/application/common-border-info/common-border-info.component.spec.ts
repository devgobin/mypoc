import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBorderInfoComponent } from './common-border-info.component';

describe('CommonBorderInfoComponent', () => {
  let component: CommonBorderInfoComponent;
  let fixture: ComponentFixture<CommonBorderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonBorderInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonBorderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
