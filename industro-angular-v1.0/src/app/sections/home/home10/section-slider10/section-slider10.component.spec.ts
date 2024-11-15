import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider10Component } from './section-slider10.component';

describe('SectionSlider10Component', () => {
  let component: SectionSlider10Component;
  let fixture: ComponentFixture<SectionSlider10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
