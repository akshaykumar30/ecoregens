import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects10Component } from './section-projects10.component';

describe('SectionProjects10Component', () => {
  let component: SectionProjects10Component;
  let fixture: ComponentFixture<SectionProjects10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
