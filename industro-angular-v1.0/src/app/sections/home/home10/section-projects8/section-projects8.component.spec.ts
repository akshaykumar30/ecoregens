import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects8Component } from './section-projects8.component';

describe('SectionProjects8Component', () => {
  let component: SectionProjects8Component;
  let fixture: ComponentFixture<SectionProjects8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
