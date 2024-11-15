import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSAutomotiveComponent } from './page-s-automotive.component';

describe('PageSAutomotiveComponent', () => {
  let component: PageSAutomotiveComponent;
  let fixture: ComponentFixture<PageSAutomotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSAutomotiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSAutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
