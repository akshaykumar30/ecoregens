import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGetInTouch1Component } from './section-get-in-touch1.component';

describe('SectionGetInTouch1Component', () => {
  let component: SectionGetInTouch1Component;
  let fixture: ComponentFixture<SectionGetInTouch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGetInTouch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGetInTouch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
