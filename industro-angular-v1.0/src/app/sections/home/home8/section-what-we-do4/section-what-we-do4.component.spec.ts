import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo4Component } from './section-what-we-do4.component';

describe('SectionWhatWeDo4Component', () => {
  let component: SectionWhatWeDo4Component;
  let fixture: ComponentFixture<SectionWhatWeDo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatWeDo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatWeDo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
