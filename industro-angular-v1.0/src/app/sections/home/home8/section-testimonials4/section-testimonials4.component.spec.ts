import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials4Component } from './section-testimonials4.component';

describe('SectionTestimonials4Component', () => {
  let component: SectionTestimonials4Component;
  let fixture: ComponentFixture<SectionTestimonials4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestimonials4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
