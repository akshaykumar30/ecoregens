import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects6Component } from './section-projects6.component';

describe('SectionProjects6Component', () => {
  let component: SectionProjects6Component;
  let fixture: ComponentFixture<SectionProjects6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
