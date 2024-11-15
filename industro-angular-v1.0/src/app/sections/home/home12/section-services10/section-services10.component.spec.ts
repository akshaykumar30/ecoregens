import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices10Component } from './section-services10.component';

describe('SectionServices10Component', () => {
  let component: SectionServices10Component;
  let fixture: ComponentFixture<SectionServices10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
