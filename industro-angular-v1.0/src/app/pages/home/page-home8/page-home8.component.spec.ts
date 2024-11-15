import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome8Component } from './page-home8.component';

describe('PageHome8Component', () => {
  let component: PageHome8Component;
  let fixture: ComponentFixture<PageHome8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
