import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader5Component } from './section-header5.component';

describe('SectionHeader5Component', () => {
  let component: SectionHeader5Component;
  let fixture: ComponentFixture<SectionHeader5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
