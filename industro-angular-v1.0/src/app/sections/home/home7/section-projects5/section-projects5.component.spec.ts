import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects5Component } from './section-projects5.component';

describe('SectionProjects5Component', () => {
  let component: SectionProjects5Component;
  let fixture: ComponentFixture<SectionProjects5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
