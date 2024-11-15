import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs5Component } from './section-blogs5.component';

describe('SectionBlogs5Component', () => {
  let component: SectionBlogs5Component;
  let fixture: ComponentFixture<SectionBlogs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
