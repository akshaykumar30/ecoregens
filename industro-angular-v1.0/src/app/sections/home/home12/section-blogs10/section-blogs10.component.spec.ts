import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs10Component } from './section-blogs10.component';

describe('SectionBlogs10Component', () => {
  let component: SectionBlogs10Component;
  let fixture: ComponentFixture<SectionBlogs10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogs10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogs10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
