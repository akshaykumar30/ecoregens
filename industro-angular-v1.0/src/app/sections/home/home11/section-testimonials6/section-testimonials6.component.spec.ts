import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials6Component } from './section-testimonials6.component';

describe('SectionTestimonials6Component', () => {
  let component: SectionTestimonials6Component;
  let fixture: ComponentFixture<SectionTestimonials6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestimonials6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
