import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices11Component } from './section-services11.component';

describe('SectionServices11Component', () => {
  let component: SectionServices11Component;
  let fixture: ComponentFixture<SectionServices11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
