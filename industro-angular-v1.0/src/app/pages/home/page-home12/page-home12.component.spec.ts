import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome12Component } from './page-home12.component';

describe('PageHome12Component', () => {
  let component: PageHome12Component;
  let fixture: ComponentFixture<PageHome12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
