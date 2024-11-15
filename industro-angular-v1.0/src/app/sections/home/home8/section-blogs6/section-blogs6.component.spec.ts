import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs6Component } from './section-blogs6.component';

describe('SectionBlogs6Component', () => {
  let component: SectionBlogs6Component;
  let fixture: ComponentFixture<SectionBlogs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
