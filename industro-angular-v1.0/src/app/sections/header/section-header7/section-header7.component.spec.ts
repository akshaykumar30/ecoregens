import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader7Component } from './section-header7.component';

describe('SectionHeader7Component', () => {
  let component: SectionHeader7Component;
  let fixture: ComponentFixture<SectionHeader7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
