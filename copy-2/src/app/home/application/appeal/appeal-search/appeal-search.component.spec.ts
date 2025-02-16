import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealSearchComponent } from './appeal-search.component';

describe('AppealSearchComponent', () => {
  let component: AppealSearchComponent;
  let fixture: ComponentFixture<AppealSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppealSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
