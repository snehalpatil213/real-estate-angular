import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBuyingProcess } from './plot-buying-process';

describe('PlotBuyingProcess', () => {
  let component: PlotBuyingProcess;
  let fixture: ComponentFixture<PlotBuyingProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotBuyingProcess],
    }).compileComponents();

    fixture = TestBed.createComponent(PlotBuyingProcess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
