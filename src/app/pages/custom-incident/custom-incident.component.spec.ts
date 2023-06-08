import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIncidentComponent } from './custom-incident.component';

describe('CustomIncidentComponent', () => {
  let component: CustomIncidentComponent;
  let fixture: ComponentFixture<CustomIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
