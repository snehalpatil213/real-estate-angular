import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentBenefits } from './investment-benefits';

describe('InvestmentBenefits', () => {
  let component: InvestmentBenefits;
  let fixture: ComponentFixture<InvestmentBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentBenefits],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
