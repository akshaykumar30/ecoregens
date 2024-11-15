import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTagsComponent } from './section-tags.component';

describe('SectionTagsComponent', () => {
  let component: SectionTagsComponent;
  let fixture: ComponentFixture<SectionTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
