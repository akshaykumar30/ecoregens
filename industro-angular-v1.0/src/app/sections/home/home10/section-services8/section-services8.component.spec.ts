import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices8Component } from './section-services8.component';

describe('SectionServices8Component', () => {
  let component: SectionServices8Component;
  let fixture: ComponentFixture<SectionServices8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
