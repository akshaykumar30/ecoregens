import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeaturedProductsComponent } from './section-featured-products.component';

describe('SectionFeaturedProductsComponent', () => {
  let component: SectionFeaturedProductsComponent;
  let fixture: ComponentFixture<SectionFeaturedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFeaturedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
