import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContactUs1Component } from './section-contact-us1.component';

describe('SectionContactUs1Component', () => {
  let component: SectionContactUs1Component;
  let fixture: ComponentFixture<SectionContactUs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionContactUs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContactUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
