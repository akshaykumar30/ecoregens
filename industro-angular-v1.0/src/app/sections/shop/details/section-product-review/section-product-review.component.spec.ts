import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductReviewComponent } from './section-product-review.component';

describe('SectionProductReviewComponent', () => {
  let component: SectionProductReviewComponent;
  let fixture: ComponentFixture<SectionProductReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
