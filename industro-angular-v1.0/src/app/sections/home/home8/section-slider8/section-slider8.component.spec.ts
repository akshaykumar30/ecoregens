import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider8Component } from './section-slider8.component';

describe('SectionSlider8Component', () => {
  let component: SectionSlider8Component;
  let fixture: ComponentFixture<SectionSlider8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
