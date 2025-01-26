import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailEditComponent } from './issue-detail-edit.component';

describe('IssueDetailEditComponent', () => {
  let component: IssueDetailEditComponent;
  let fixture: ComponentFixture<IssueDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssueDetailEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IssueDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
