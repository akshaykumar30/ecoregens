import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader3Component } from './section-header3.component';

describe('SectionHeader3Component', () => {
  let component: SectionHeader3Component;
  let fixture: ComponentFixture<SectionHeader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
