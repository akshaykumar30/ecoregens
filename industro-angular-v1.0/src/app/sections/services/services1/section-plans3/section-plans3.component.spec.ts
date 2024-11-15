import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlans3Component } from './section-plans3.component';

describe('SectionPlans3Component', () => {
  let component: SectionPlans3Component;
  let fixture: ComponentFixture<SectionPlans3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPlans3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlans3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
