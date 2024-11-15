import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs4Component } from './section-blogs4.component';

describe('SectionBlogs4Component', () => {
  let component: SectionBlogs4Component;
  let fixture: ComponentFixture<SectionBlogs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
