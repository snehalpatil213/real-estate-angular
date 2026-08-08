import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyConsultation } from './property-consultation';

describe('PropertyConsultation', () => {
  let component: PropertyConsultation;
  let fixture: ComponentFixture<PropertyConsultation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyConsultation],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyConsultation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
