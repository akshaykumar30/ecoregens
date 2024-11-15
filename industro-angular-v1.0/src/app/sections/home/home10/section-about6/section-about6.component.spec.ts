import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout6Component } from './section-about6.component';

describe('SectionAbout6Component', () => {
  let component: SectionAbout6Component;
  let fixture: ComponentFixture<SectionAbout6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
