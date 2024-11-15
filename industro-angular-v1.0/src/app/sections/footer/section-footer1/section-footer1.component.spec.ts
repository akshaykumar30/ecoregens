import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFooter1Component } from './section-footer1.component';

describe('SectionFooter1Component', () => {
  let component: SectionFooter1Component;
  let fixture: ComponentFixture<SectionFooter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFooter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFooter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
