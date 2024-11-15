import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader1Component } from './section-header1.component';

describe('SectionHeader1Component', () => {
  let component: SectionHeader1Component;
  let fixture: ComponentFixture<SectionHeader1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
