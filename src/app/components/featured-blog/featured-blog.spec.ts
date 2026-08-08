import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlog } from './featured-blog';

describe('FeaturedBlog', () => {
  let component: FeaturedBlog;
  let fixture: ComponentFixture<FeaturedBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
