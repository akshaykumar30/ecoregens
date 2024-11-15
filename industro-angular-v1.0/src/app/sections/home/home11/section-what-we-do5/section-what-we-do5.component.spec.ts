import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo5Component } from './section-what-we-do5.component';

describe('SectionWhatWeDo5Component', () => {
  let component: SectionWhatWeDo5Component;
  let fixture: ComponentFixture<SectionWhatWeDo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatWeDo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatWeDo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
