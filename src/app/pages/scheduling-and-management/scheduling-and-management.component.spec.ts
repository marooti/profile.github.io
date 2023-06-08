import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingAndManagementComponent } from './scheduling-and-management.component';

describe('SchedulingAndManagementComponent', () => {
  let component: SchedulingAndManagementComponent;
  let fixture: ComponentFixture<SchedulingAndManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingAndManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingAndManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
