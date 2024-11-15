import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices12Component } from './section-services12.component';

describe('SectionServices12Component', () => {
  let component: SectionServices12Component;
  let fixture: ComponentFixture<SectionServices12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
