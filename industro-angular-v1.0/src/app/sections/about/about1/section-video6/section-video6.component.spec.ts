import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo6Component } from './section-video6.component';

describe('SectionVideo6Component', () => {
  let component: SectionVideo6Component;
  let fixture: ComponentFixture<SectionVideo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVideo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
