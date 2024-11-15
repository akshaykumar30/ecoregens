import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs8Component } from './section-blogs8.component';

describe('SectionBlogs8Component', () => {
  let component: SectionBlogs8Component;
  let fixture: ComponentFixture<SectionBlogs8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
