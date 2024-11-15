import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGallery1Component } from './section-gallery1.component';

describe('SectionGallery1Component', () => {
  let component: SectionGallery1Component;
  let fixture: ComponentFixture<SectionGallery1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGallery1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGallery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
