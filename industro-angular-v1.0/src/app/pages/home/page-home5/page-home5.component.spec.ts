import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome5Component } from './page-home5.component';

describe('PageHome5Component', () => {
  let component: PageHome5Component;
  let fixture: ComponentFixture<PageHome5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
