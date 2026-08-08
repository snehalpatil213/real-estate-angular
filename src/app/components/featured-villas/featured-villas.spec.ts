import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVillas } from './featured-villas';

describe('FeaturedVillas', () => {
  let component: FeaturedVillas;
  let fixture: ComponentFixture<FeaturedVillas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedVillas],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedVillas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
