import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices9Component } from './section-services9.component';

describe('SectionServices9Component', () => {
  let component: SectionServices9Component;
  let fixture: ComponentFixture<SectionServices9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
