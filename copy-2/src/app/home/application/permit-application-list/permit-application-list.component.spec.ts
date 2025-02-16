import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitApplicationListComponent } from './permit-application-list.component';

describe('PermitApplicationListComponent', () => {
  let component: PermitApplicationListComponent;
  let fixture: ComponentFixture<PermitApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitApplicationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermitApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
