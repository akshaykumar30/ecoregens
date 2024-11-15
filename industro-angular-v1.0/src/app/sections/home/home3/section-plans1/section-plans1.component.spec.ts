import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlans1Component } from './section-plans1.component';

describe('SectionPlans1Component', () => {
  let component: SectionPlans1Component;
  let fixture: ComponentFixture<SectionPlans1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPlans1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
