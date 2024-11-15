import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects9Component } from './section-projects9.component';

describe('SectionProjects9Component', () => {
  let component: SectionProjects9Component;
  let fixture: ComponentFixture<SectionProjects9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
