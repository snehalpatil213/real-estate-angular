import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumLifestyle } from './premium-lifestyle';

describe('PremiumLifestyle', () => {
  let component: PremiumLifestyle;
  let fixture: ComponentFixture<PremiumLifestyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumLifestyle],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumLifestyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
