import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials7Component } from './section-testimonials7.component';

describe('SectionTestimonials7Component', () => {
  let component: SectionTestimonials7Component;
  let fixture: ComponentFixture<SectionTestimonials7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestimonials7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
