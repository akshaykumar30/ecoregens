import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs3Component } from './section-blogs3.component';

describe('SectionBlogs3Component', () => {
  let component: SectionBlogs3Component;
  let fixture: ComponentFixture<SectionBlogs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
