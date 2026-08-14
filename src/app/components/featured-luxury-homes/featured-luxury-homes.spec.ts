import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLuxuryHomes } from './featured-luxury-homes';

describe('FeaturedLuxuryHomes', () => {
  let component: FeaturedLuxuryHomes;
  let fixture: ComponentFixture<FeaturedLuxuryHomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedLuxuryHomes],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedLuxuryHomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
