import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader2Component } from './section-header2.component';

describe('SectionHeader2Component', () => {
  let component: SectionHeader2Component;
  let fixture: ComponentFixture<SectionHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
