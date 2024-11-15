import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader4Component } from './section-header4.component';

describe('SectionHeader4Component', () => {
  let component: SectionHeader4Component;
  let fixture: ComponentFixture<SectionHeader4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
