import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQuality2Component } from './section-quality2.component';

describe('SectionQuality2Component', () => {
  let component: SectionQuality2Component;
  let fixture: ComponentFixture<SectionQuality2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionQuality2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionQuality2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
