import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecifications2Component } from './section-specifications2.component';

describe('SectionSpecifications2Component', () => {
  let component: SectionSpecifications2Component;
  let fixture: ComponentFixture<SectionSpecifications2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSpecifications2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpecifications2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
