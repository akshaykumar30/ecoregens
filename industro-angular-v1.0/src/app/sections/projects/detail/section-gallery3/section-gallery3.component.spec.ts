import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGallery3Component } from './section-gallery3.component';

describe('SectionGallery3Component', () => {
  let component: SectionGallery3Component;
  let fixture: ComponentFixture<SectionGallery3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGallery3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGallery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
