import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLuxuryLiving } from './why-luxury-living';

describe('WhyLuxuryLiving', () => {
  let component: WhyLuxuryLiving;
  let fixture: ComponentFixture<WhyLuxuryLiving>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyLuxuryLiving],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyLuxuryLiving);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
