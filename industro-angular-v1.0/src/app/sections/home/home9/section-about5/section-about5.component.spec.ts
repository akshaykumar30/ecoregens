import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout5Component } from './section-about5.component';

describe('SectionAbout5Component', () => {
  let component: SectionAbout5Component;
  let fixture: ComponentFixture<SectionAbout5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
