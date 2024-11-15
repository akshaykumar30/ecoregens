import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeader6Component } from './section-header6.component';

describe('SectionHeader6Component', () => {
  let component: SectionHeader6Component;
  let fixture: ComponentFixture<SectionHeader6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeader6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeader6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
