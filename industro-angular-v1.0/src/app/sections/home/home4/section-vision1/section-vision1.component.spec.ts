import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVision1Component } from './section-vision1.component';

describe('SectionVision1Component', () => {
  let component: SectionVision1Component;
  let fixture: ComponentFixture<SectionVision1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVision1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVision1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
