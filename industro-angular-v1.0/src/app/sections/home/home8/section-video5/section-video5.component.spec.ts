import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo5Component } from './section-video5.component';

describe('SectionVideo5Component', () => {
  let component: SectionVideo5Component;
  let fixture: ComponentFixture<SectionVideo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVideo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
