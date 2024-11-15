import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonryComponent } from './page-project-masonry.component';

describe('PageProjectMasonryComponent', () => {
  let component: PageProjectMasonryComponent;
  let fixture: ComponentFixture<PageProjectMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
