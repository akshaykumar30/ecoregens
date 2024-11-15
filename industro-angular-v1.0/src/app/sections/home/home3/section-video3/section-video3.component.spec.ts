import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo3Component } from './section-video3.component';

describe('SectionVideo3Component', () => {
  let component: SectionVideo3Component;
  let fixture: ComponentFixture<SectionVideo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVideo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
