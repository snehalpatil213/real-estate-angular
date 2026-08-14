import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaLifestyle } from './villa-lifestyle';

describe('VillaLifestyle', () => {
  let component: VillaLifestyle;
  let fixture: ComponentFixture<VillaLifestyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaLifestyle],
    }).compileComponents();

    fixture = TestBed.createComponent(VillaLifestyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
