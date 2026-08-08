import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStats } from './company-stats';

describe('CompanyStats', () => {
  let component: CompanyStats;
  let fixture: ComponentFixture<CompanyStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStats],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
