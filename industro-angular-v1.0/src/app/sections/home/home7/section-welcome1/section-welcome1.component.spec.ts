import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWelcome1Component } from './section-welcome1.component';

describe('SectionWelcome1Component', () => {
  let component: SectionWelcome1Component;
  let fixture: ComponentFixture<SectionWelcome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWelcome1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWelcome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
