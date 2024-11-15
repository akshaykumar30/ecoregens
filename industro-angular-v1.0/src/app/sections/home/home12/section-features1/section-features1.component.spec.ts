import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeatures1Component } from './section-features1.component';

describe('SectionFeatures1Component', () => {
  let component: SectionFeatures1Component;
  let fixture: ComponentFixture<SectionFeatures1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFeatures1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeatures1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
