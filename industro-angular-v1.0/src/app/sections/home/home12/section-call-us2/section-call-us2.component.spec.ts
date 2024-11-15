import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCallUs2Component } from './section-call-us2.component';

describe('SectionCallUs2Component', () => {
  let component: SectionCallUs2Component;
  let fixture: ComponentFixture<SectionCallUs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCallUs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCallUs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
