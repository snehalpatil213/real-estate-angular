import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlots } from './featured-plots';

describe('FeaturedPlots', () => {
  let component: FeaturedPlots;
  let fixture: ComponentFixture<FeaturedPlots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPlots],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedPlots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
