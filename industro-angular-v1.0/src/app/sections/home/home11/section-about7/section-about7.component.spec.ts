import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout7Component } from './section-about7.component';

describe('SectionAbout7Component', () => {
  let component: SectionAbout7Component;
  let fixture: ComponentFixture<SectionAbout7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
