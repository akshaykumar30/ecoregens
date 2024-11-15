import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices4Component } from './section-services4.component';

describe('SectionServices4Component', () => {
  let component: SectionServices4Component;
  let fixture: ComponentFixture<SectionServices4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
