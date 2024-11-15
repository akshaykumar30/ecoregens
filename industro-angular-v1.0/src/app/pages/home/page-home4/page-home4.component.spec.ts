import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome4Component } from './page-home4.component';

describe('PageHome4Component', () => {
  let component: PageHome4Component;
  let fixture: ComponentFixture<PageHome4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
