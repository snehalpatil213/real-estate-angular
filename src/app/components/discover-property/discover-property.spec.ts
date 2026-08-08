import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverProperty } from './discover-property';

describe('DiscoverProperty', () => {
  let component: DiscoverProperty;
  let fixture: ComponentFixture<DiscoverProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverProperty],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverProperty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
