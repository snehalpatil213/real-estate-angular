import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInvestPlots } from './why-invest-plots';

describe('WhyInvestPlots', () => {
  let component: WhyInvestPlots;
  let fixture: ComponentFixture<WhyInvestPlots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyInvestPlots],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyInvestPlots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
