import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs9Component } from './section-blogs9.component';

describe('SectionBlogs9Component', () => {
  let component: SectionBlogs9Component;
  let fixture: ComponentFixture<SectionBlogs9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
