import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome11Component } from './page-home11.component';

describe('PageHome11Component', () => {
  let component: PageHome11Component;
  let fixture: ComponentFixture<PageHome11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
