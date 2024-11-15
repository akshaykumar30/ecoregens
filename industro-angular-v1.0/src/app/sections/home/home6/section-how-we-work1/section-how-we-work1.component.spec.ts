import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHowWeWork1Component } from './section-how-we-work1.component';

describe('SectionHowWeWork1Component', () => {
  let component: SectionHowWeWork1Component;
  let fixture: ComponentFixture<SectionHowWeWork1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHowWeWork1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHowWeWork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
