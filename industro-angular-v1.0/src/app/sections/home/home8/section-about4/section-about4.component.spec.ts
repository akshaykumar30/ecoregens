import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout4Component } from './section-about4.component';

describe('SectionAbout4Component', () => {
  let component: SectionAbout4Component;
  let fixture: ComponentFixture<SectionAbout4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
