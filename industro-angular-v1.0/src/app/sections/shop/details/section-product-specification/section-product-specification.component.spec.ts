import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductSpecificationComponent } from './section-product-specification.component';

describe('SectionProductSpecificationComponent', () => {
  let component: SectionProductSpecificationComponent;
  let fixture: ComponentFixture<SectionProductSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
