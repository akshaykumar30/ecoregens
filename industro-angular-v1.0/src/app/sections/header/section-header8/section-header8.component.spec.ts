import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader8Component } from './section-header8.component';

describe('SectionHeader8Component', () => {
  let component: SectionHeader8Component;
  let fixture: ComponentFixture<SectionHeader8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
