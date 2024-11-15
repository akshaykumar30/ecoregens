import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects7Component } from './section-projects7.component';

describe('SectionProjects7Component', () => {
  let component: SectionProjects7Component;
  let fixture: ComponentFixture<SectionProjects7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
