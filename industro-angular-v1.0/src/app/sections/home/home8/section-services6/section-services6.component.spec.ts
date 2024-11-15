import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices6Component } from './section-services6.component';

describe('SectionServices6Component', () => {
  let component: SectionServices6Component;
  let fixture: ComponentFixture<SectionServices6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
