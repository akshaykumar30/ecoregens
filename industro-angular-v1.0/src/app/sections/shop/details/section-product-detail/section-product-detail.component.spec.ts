import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductDetailComponent } from './section-product-detail.component';

describe('SectionProductDetailComponent', () => {
  let component: SectionProductDetailComponent;
  let fixture: ComponentFixture<SectionProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
