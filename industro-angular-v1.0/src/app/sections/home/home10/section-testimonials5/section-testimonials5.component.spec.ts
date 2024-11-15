import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTestimonials5Component } from './section-testimonials5.component';

describe('SectionTestimonials5Component', () => {
  let component: SectionTestimonials5Component;
  let fixture: ComponentFixture<SectionTestimonials5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTestimonials5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestimonials5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
