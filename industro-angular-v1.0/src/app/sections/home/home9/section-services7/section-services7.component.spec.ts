import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices7Component } from './section-services7.component';

describe('SectionServices7Component', () => {
  let component: SectionServices7Component;
  let fixture: ComponentFixture<SectionServices7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
