import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuality1Component } from './section-quality1.component';

describe('SectionQuality1Component', () => {
  let component: SectionQuality1Component;
  let fixture: ComponentFixture<SectionQuality1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionQuality1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQuality1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
