import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome6Component } from './page-home6.component';

describe('PageHome6Component', () => {
  let component: PageHome6Component;
  let fixture: ComponentFixture<PageHome6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
