import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGallery2Component } from './section-gallery2.component';

describe('SectionGallery2Component', () => {
  let component: SectionGallery2Component;
  let fixture: ComponentFixture<SectionGallery2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGallery2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGallery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
