import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGridComponent } from './page-project-grid.component';

describe('PageProjectGridComponent', () => {
  let component: PageProjectGridComponent;
  let fixture: ComponentFixture<PageProjectGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
