import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo6Component } from './section-what-we-do6.component';

describe('SectionWhatWeDo6Component', () => {
  let component: SectionWhatWeDo6Component;
  let fixture: ComponentFixture<SectionWhatWeDo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatWeDo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatWeDo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
