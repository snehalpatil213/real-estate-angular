import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedApartments } from './featured-apartments';

describe('FeaturedApartments', () => {
  let component: FeaturedApartments;
  let fixture: ComponentFixture<FeaturedApartments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedApartments],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedApartments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
