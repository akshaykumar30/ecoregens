import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider9Component } from './section-slider9.component';

describe('SectionSlider9Component', () => {
  let component: SectionSlider9Component;
  let fixture: ComponentFixture<SectionSlider9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
