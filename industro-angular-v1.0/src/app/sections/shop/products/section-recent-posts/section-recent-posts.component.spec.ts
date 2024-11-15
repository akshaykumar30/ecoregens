import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRecentPostsComponent } from './section-recent-posts.component';

describe('SectionRecentPostsComponent', () => {
  let component: SectionRecentPostsComponent;
  let fixture: ComponentFixture<SectionRecentPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRecentPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRecentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
