import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome7Component } from './page-home7.component';

describe('PageHome7Component', () => {
  let component: PageHome7Component;
  let fixture: ComponentFixture<PageHome7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
