import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome9Component } from './page-home9.component';

describe('PageHome9Component', () => {
  let component: PageHome9Component;
  let fixture: ComponentFixture<PageHome9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
