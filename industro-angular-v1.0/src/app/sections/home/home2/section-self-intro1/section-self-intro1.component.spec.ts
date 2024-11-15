import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelfIntro1Component } from './section-self-intro1.component';

describe('SectionSelfIntro1Component', () => {
  let component: SectionSelfIntro1Component;
  let fixture: ComponentFixture<SectionSelfIntro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSelfIntro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelfIntro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
