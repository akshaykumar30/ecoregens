import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamSingleComponent } from './page-team-single.component';

describe('PageTeamSingleComponent', () => {
  let component: PageTeamSingleComponent;
  let fixture: ComponentFixture<PageTeamSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTeamSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
