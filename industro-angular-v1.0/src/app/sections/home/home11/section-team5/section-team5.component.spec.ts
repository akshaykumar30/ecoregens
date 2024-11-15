import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeam5Component } from './section-team5.component';

describe('SectionTeam5Component', () => {
  let component: SectionTeam5Component;
  let fixture: ComponentFixture<SectionTeam5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeam5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
