import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogPostComponent } from './page-blog-post.component';

describe('PageBlogPostComponent', () => {
  let component: PageBlogPostComponent;
  let fixture: ComponentFixture<PageBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
