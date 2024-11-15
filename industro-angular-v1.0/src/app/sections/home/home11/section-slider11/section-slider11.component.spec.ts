import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider11Component } from './section-slider11.component';

describe('SectionSlider11Component', () => {
  let component: SectionSlider11Component;
  let fixture: ComponentFixture<SectionSlider11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
