import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs7Component } from './section-blogs7.component';

describe('SectionBlogs7Component', () => {
  let component: SectionBlogs7Component;
  let fixture: ComponentFixture<SectionBlogs7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
