import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlans2Component } from './section-plans2.component';

describe('SectionPlans2Component', () => {
  let component: SectionPlans2Component;
  let fixture: ComponentFixture<SectionPlans2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPlans2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
