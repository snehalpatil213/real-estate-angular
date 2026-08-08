import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaAmenities } from './villa-amenities';

describe('VillaAmenities', () => {
  let component: VillaAmenities;
  let fixture: ComponentFixture<VillaAmenities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaAmenities],
    }).compileComponents();

    fixture = TestBed.createComponent(VillaAmenities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
