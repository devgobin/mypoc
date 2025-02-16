import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHistoryComponent } from './common-history.component';

describe('CommonHistoryComponent', () => {
  let component: CommonHistoryComponent;
  let fixture: ComponentFixture<CommonHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
