import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout8Component } from './section-about8.component';

describe('SectionAbout8Component', () => {
  let component: SectionAbout8Component;
  let fixture: ComponentFixture<SectionAbout8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
