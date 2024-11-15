import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionArchivesComponent } from './section-archives.component';

describe('SectionArchivesComponent', () => {
  let component: SectionArchivesComponent;
  let fixture: ComponentFixture<SectionArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionArchivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
