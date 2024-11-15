import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices5Component } from './section-services5.component';

describe('SectionServices5Component', () => {
  let component: SectionServices5Component;
  let fixture: ComponentFixture<SectionServices5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
