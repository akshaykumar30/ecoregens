import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideo4Component } from './section-video4.component';

describe('SectionVideo4Component', () => {
  let component: SectionVideo4Component;
  let fixture: ComponentFixture<SectionVideo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVideo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
