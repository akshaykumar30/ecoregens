import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome10Component } from './page-home10.component';

describe('PageHome10Component', () => {
  let component: PageHome10Component;
  let fixture: ComponentFixture<PageHome10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
