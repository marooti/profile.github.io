import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPointsComponent } from './monitoring-points.component';

describe('MonitoringPointsComponent', () => {
  let component: MonitoringPointsComponent;
  let fixture: ComponentFixture<MonitoringPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
