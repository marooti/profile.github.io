import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFirmsComponent } from './security-firms.component';

describe('SecurityFirmsComponent', () => {
  let component: SecurityFirmsComponent;
  let fixture: ComponentFixture<SecurityFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityFirmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
