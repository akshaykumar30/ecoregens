import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBlogBox1Component } from './element-blog-box1.component';

describe('ElementBlogBox1Component', () => {
  let component: ElementBlogBox1Component;
  let fixture: ComponentFixture<ElementBlogBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementBlogBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBlogBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
