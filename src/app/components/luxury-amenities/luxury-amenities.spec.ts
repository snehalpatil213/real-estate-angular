import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryAmenities } from './luxury-amenities';

describe('LuxuryAmenities', () => {
  let component: LuxuryAmenities;
  let fixture: ComponentFixture<LuxuryAmenities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryAmenities],
    }).compileComponents();

    fixture = TestBed.createComponent(LuxuryAmenities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
