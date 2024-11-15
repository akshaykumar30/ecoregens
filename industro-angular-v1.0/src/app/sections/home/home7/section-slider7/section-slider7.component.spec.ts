import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider7Component } from './section-slider7.component';

describe('SectionSlider7Component', () => {
  let component: SectionSlider7Component;
  let fixture: ComponentFixture<SectionSlider7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
