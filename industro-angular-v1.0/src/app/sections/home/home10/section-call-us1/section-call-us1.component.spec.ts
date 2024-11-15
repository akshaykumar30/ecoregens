import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCallUs1Component } from './section-call-us1.component';

describe('SectionCallUs1Component', () => {
  let component: SectionCallUs1Component;
  let fixture: ComponentFixture<SectionCallUs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCallUs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCallUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
