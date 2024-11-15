import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFooter3Component } from './section-footer3.component';

describe('SectionFooter3Component', () => {
  let component: SectionFooter3Component;
  let fixture: ComponentFixture<SectionFooter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFooter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFooter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
