import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVision2Component } from './section-vision2.component';

describe('SectionVision2Component', () => {
  let component: SectionVision2Component;
  let fixture: ComponentFixture<SectionVision2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVision2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVision2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
