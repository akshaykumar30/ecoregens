import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeam4Component } from './section-team4.component';

describe('SectionTeam4Component', () => {
  let component: SectionTeam4Component;
  let fixture: ComponentFixture<SectionTeam4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeam4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
