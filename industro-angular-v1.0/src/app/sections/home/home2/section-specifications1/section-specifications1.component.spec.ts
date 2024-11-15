import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecifications1Component } from './section-specifications1.component';

describe('SectionSpecifications1Component', () => {
  let component: SectionSpecifications1Component;
  let fixture: ComponentFixture<SectionSpecifications1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSpecifications1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpecifications1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
