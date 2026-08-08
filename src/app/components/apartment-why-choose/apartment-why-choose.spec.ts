import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentWhyChoose } from './apartment-why-choose';

describe('ApartmentWhyChoose', () => {
  let component: ApartmentWhyChoose;
  let fixture: ComponentFixture<ApartmentWhyChoose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentWhyChoose],
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmentWhyChoose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
