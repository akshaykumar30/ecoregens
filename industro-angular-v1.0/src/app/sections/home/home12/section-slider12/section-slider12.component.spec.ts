import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider12Component } from './section-slider12.component';

describe('SectionSlider12Component', () => {
  let component: SectionSlider12Component;
  let fixture: ComponentFixture<SectionSlider12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
