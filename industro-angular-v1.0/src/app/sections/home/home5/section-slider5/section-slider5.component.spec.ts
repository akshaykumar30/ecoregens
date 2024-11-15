import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider5Component } from './section-slider5.component';

describe('SectionSlider5Component', () => {
  let component: SectionSlider5Component;
  let fixture: ComponentFixture<SectionSlider5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
