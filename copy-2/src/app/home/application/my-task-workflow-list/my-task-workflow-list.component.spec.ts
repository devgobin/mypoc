import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaskWorkflowListComponent } from './my-task-workflow-list.component';

describe('MyTaskWorkflowListComponent', () => {
  let component: MyTaskWorkflowListComponent;
  let fixture: ComponentFixture<MyTaskWorkflowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTaskWorkflowListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTaskWorkflowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
