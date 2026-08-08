import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plots } from './plots';

describe('Plots', () => {
  let component: Plots;
  let fixture: ComponentFixture<Plots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plots],
    }).compileComponents();

    fixture = TestBed.createComponent(Plots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
