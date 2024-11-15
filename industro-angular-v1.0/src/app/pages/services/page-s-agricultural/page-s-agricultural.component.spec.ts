import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSAgriculturalComponent } from './page-s-agricultural.component';

describe('PageSAgriculturalComponent', () => {
  let component: PageSAgriculturalComponent;
  let fixture: ComponentFixture<PageSAgriculturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSAgriculturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSAgriculturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
