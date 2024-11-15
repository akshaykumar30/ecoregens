import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeam3Component } from './section-team3.component';

describe('SectionTeam3Component', () => {
  let component: SectionTeam3Component;
  let fixture: ComponentFixture<SectionTeam3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeam3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
