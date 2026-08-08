import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryHomes } from './luxury-homes';

describe('LuxuryHomes', () => {
  let component: LuxuryHomes;
  let fixture: ComponentFixture<LuxuryHomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryHomes],
    }).compileComponents();

    fixture = TestBed.createComponent(LuxuryHomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
